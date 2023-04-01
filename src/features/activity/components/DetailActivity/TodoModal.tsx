import clsx from 'clsx'
import React, { useState } from 'react'

import Button from '@components/Button'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@components/Modal'
import Select from '@components/Select'

import { UseDiscosure } from '@/types/hooks'

import { PRIORITY_ACTIVITY, PRIORITY_ACTIVITY_OPTIONS } from '@/constants'

export interface TodoModalProps {
  modal: UseDiscosure
}

const TodoModal: React.FC<TodoModalProps> = ({ modal }) => {
  const [value, setValue] = useState(PRIORITY_ACTIVITY.VeryHigh)
  const handleChange = (value: React.ReactNode) => {
    setValue(value as PRIORITY_ACTIVITY)
  }

  return (
    <Modal
      isOpen={modal.isOpen}
      handler={modal.toggle}
      dismiss={{
        closeButton: true,
        escapeKey: true,
        outsidePress: true,
      }}
      isCenter
      isScrollable
    >
      <ModalHeader>Tambah List Item</ModalHeader>
      <ModalBody className='text-gray-600'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
          non iusto ea accusamus excepturi sit? Fugit commodi mollitia inventore
          ducimus! Suscipit saepe harum pariatur doloribus rerum nam, voluptate
          officiis?
        </p>
        <Select value={value} onChange={handleChange}>
          {PRIORITY_ACTIVITY_OPTIONS.map((val) => {
            return (
              <Select.Option key={val.value} value={val.value}>
                <div className='flex items-center gap-3'>
                  <div className={clsx('h-3 w-3 rounded-full', val.color)} />
                  <span>{val.name}</span>
                </div>
              </Select.Option>
            )
          })}
        </Select>
      </ModalBody>
      <ModalFooter>
        <Button type='button' variant='solid' color='primary'>
          Simpan
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default TodoModal
