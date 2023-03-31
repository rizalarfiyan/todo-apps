import React, { useMemo, useState } from 'react'

import Confirmation, {
  ConfirmationContext,
  ConfirmationContextData,
} from '@components/Confirmation'

const ConfirmationProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [confirm, setConfirm] = useState<ConfirmationContextData>(undefined)

  const close = () => {
    setConfirm(undefined)
  }

  const value = useMemo(() => {
    return {
      setConfirm,
      close,
    }
  }, [])

  return (
    <ConfirmationContext.Provider value={value}>
      {children}
      <Confirmation
        isOpen={!!confirm}
        close={close}
        content={confirm?.content}
        textClose={confirm?.textClose}
        textConfirm={confirm?.textConfirm}
        onReject={confirm?.onReject}
        onConfirm={confirm?.onConfirm}
      />
    </ConfirmationContext.Provider>
  )
}

export default ConfirmationProvider
