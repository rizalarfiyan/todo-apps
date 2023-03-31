import { useCallback, useState } from 'react'

import { UseDiscosure } from '@/types/hooks'

const useDisclosure = (initial = false): UseDiscosure => {
  const [isOpen, setIsOpen] = useState(initial)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((state) => !state), [])

  return { isOpen, open, close, toggle }
}

export default useDisclosure
