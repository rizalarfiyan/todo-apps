import React from 'react'

import Button from '@components/Button'
import Modal, { ModalBody, ModalFooter, ModalHeader } from '@components/Modal'

import { UseDiscosure } from '@/types/hooks'

export interface TodoModalProps {
  modal: UseDiscosure
}

const TodoModal: React.FC<TodoModalProps> = ({ modal }) => {
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
          non iusto ea accusamus excepturi sit? Fugit commodi mollitia inventore
          ducimus! Suscipit saepe harum pariatur doloribus rerum nam, voluptate
          officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
          non iusto ea accusamus excepturi sit? Fugit commodi mollitia inventore
          ducimus! Suscipit saepe harum pariatur doloribus rerum nam, voluptate
          officiis?
        </p>
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
