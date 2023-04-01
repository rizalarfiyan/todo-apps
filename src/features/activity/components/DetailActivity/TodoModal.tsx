import clsx from 'clsx'
import React, { useState } from 'react'

import Button from '@components/Button'
import Input from '@components/Input'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@components/Modal'
import Select from '@components/Select'

import { useNotification } from '@hooks/useNotification'

import { useCreateTodo } from '@features/activity/services'

import { BaseTodoRequest } from '@dto/activity'

import { TodoModalProps } from './types'

import {
  DEFAULT_PRIORITY_ACTIVITY,
  DEFAULT_PRIORITY_STATUS,
  PRIORITY_ACTIVITY,
  PRIORITY_ACTIVITY_OPTIONS,
} from '@/constants'

const TodoModal: React.FC<TodoModalProps> = ({ modal, identity }) => {
  const defaultData: BaseTodoRequest = {
    is_active: DEFAULT_PRIORITY_STATUS,
    priority: DEFAULT_PRIORITY_ACTIVITY,
    title: '',
  }

  const [value, setValue] = useState(defaultData)

  const notification = useNotification()
  const createTodo = useCreateTodo()

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setValue((prev) => ({
      ...prev,
      title: event.target.value,
    }))
  }

  const handleChangePriority = (value: React.ReactNode) => {
    setValue((prev) => ({
      ...prev,
      priority: value as PRIORITY_ACTIVITY,
    }))
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    await createTodo
      .mutateAsync({
        data: {
          activity_group_id: identity,
          ...value,
        },
      })
      .then(() => {
        notification.success('Todo Item berhasil dibuat')
        setValue(defaultData)
        modal.close()
      })
      .catch(() => {
        notification.error('Todo Item gagal dibuat')
      })
  }

  const modalClose = !createTodo.isLoading

  return (
    <Modal
      isOpen={modal.isOpen}
      handler={modal.toggle}
      dismiss={{
        closeButton: modalClose,
        escapeKey: modalClose,
        outsidePress: modalClose,
      }}
      isCenter
      isScrollable
    >
      <ModalHeader>Tambah List Item</ModalHeader>
      <ModalBody className='gap-10 text-gray-600'>
        <div className='form-group'>
          <label htmlFor='list-item-name' className='form-label uppercase'>
            NAMA LIST ITEM
          </label>
          <Input
            id='list-item-name'
            name='name'
            type='text'
            placeholder='Tambahkan nama list item'
            size='lg'
            value={value.title}
            onChange={handleChangeName}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='select-priority' className='form-label uppercase'>
            Priority
          </label>
          <div className='w-full max-w-[240px]'>
            <Select
              id='select-priority'
              value={value.priority}
              onChange={handleChangePriority}
            >
              {PRIORITY_ACTIVITY_OPTIONS.map((val) => {
                return (
                  <Select.Option key={val.value} value={val.value}>
                    <div className='flex items-center gap-3'>
                      <div
                        className={clsx('h-3 w-3 rounded-full', val.color)}
                      />
                      <span className='text-gray-600'>{val.name}</span>
                    </div>
                  </Select.Option>
                )
              })}
            </Select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          type='button'
          variant='solid'
          color='primary'
          isLoading={createTodo.isLoading}
          disabled={value.title.trim() === ''}
          onClick={handleSubmit}
        >
          Simpan
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default TodoModal
