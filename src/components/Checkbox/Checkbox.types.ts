import { InputHTMLAttributes } from 'react'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'onChange' | 'defaultChecked' | 'value'
> &
  ICheckboxProps

export interface ICheckboxProps {
  onChange?: (val: boolean) => void
  initialValue?: boolean
  isLoading?: boolean
}
