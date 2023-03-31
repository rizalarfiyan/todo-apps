export type ConfirmationProps = React.HTMLAttributes<HTMLDivElement> &
  IConfirmationProps

export interface IConfirmationProps extends ConfirmationData {
  isOpen: boolean
  close: () => void
}

export interface ConfirmationData {
  content?: string | JSX.Element
  textClose?: string
  textConfirm?: string
  onReject?: (close: () => void) => void
  onConfirm?: (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    close: () => void
  ) => void
}

export type ConfirmationContextData = ConfirmationData | undefined

export type ConfirmationContextImpl = {
  setConfirm: React.Dispatch<React.SetStateAction<ConfirmationContextData>>
  close: () => void
}
