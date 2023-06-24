import { Modal } from '@mantine/core'
import { ReactNode } from 'react'

interface ModalProps {
  opened: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

export const CustomModal = ({
  opened,
  onClose,
  title,
  children,
}: ModalProps) => (
  <Modal opened={opened} onClose={onClose} title={title}>
    {children}
  </Modal>
)
