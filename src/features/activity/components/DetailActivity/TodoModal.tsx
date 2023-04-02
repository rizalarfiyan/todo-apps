import clsx from 'clsx'
import React, { useEffect, useState } from 'react'

import Button from '@components/Button'
import Input from '@components/Input'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@components/Modal'
import Select from '@components/Select'

import { useNotification } from '@hooks/useNotification'

import { useCreateTodo, useUpdateTodo } from '@features/activity/services'

import { BaseTodoRequest } from '@dto/activity'

import { TodoModalProps } from './types'

import {
  DEFAULT_PRIORITY_ACTIVITY,
  DEFAULT_PRIORITY_STATUS,
  PRIORITY_ACTIVITY,
  PRIORITY_ACTIVITY_OPTIONS,
} from '@/constants'

const TodoModal: React.FC<TodoModalProps> = ({
  modal,
  activityGroupId,
  todo,
}) => {
  const defaultData: BaseTodoRequest = {
    is_active: DEFAULT_PRIORITY_STATUS,
    priority: DEFAULT_PRIORITY_ACTIVITY,
    title: '',
  }

  const [value, setValue] = useState(defaultData)

  const notification = useNotification()
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()

  const isEdit = !!todo
  useEffect(() => {
    if (isEdit) {
      setValue({
        title: todo?.title || '',
        priority: todo?.priority || DEFAULT_PRIORITY_ACTIVITY,
        is_active: todo?.is_active,
      })
    }
  }, [todo])

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isEdit) {
      await updateTodo
        .mutateAsync({
          data: {
            activity_group_id: activityGroupId,
            id: todo?.id as number,
            ...value,
          },
        })
        .then(() => {
          notification.success('Todo Item berhasil diperbarui')
          setValue(defaultData)
          modal.close()
        })
        .catch(() => {
          notification.error('Todo Item gagal diperbarui')
        })
      return
    }
    await createTodo
      .mutateAsync({
        data: {
          activity_group_id: activityGroupId,
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

  const modalClose = !createTodo.isLoading && !updateTodo.isLoading
  const isLoading = createTodo.isLoading || updateTodo.isLoading

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
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          {isEdit ? 'Edit List Item' : 'Tambah List Item'}
        </ModalHeader>
        <ModalBody className='gap-10 text-gray-600'>
          <div className='form-group'>
            <label htmlFor='list-item-name' className='form-label uppercase'>
              NAMA LIST ITEM
            </label>
            <Input
              id='list-item-name'
              name='name'
              type='text'
              placeholder={
                isEdit ? 'Edit nama list item' : 'Tambahkan nama list item'
              }
              size='lg'
              value={value.title}
              limit={255}
              onChange={handleChangeName}
              disabled={isLoading}
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
                disabled={isLoading}
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
            type='submit'
            variant='solid'
            color='primary'
            isLoading={isLoading}
            disabled={value.title.trim() === ''}
          >
            Simpan
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default TodoModal
