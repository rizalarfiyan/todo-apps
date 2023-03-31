import { useContext } from 'react'

import { ConfirmationContext } from '@components/Confirmation'

const useConfirmation = () => useContext(ConfirmationContext)

export default useConfirmation
