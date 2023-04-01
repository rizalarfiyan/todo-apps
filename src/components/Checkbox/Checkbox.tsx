import clsx from 'clsx'
import React, { forwardRef, useState } from 'react'

import Icon from '@components/Icon'
import Spinner from '@components/Spinner'

import { CheckboxProps } from './Checkbox.types'

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { initialValue, isLoading, disabled, onChange, ...rest } = props

  const [isChecked, setIsChecked] = useState(initialValue || false)

  const handleChange = () => {
    setIsChecked((prev) => !prev)
    onChange?.(!isChecked)
  }

  const isDisable = disabled || isLoading

  return (
    <div className={clsx('checkbox-wrapper', isLoading && 'disabled')}>
      {isLoading && (
        <div className='loading-wrapper'>
          <Spinner size='sm' />
        </div>
      )}
      <div className={clsx('checkbox-content', isLoading && 'opacity-0')}>
        <input
          type='checkbox'
          disabled={isDisable}
          aria-disabled={isDisable}
          defaultChecked={isChecked}
          onChange={handleChange}
          ref={ref}
          {...rest}
        />
        <Icon type='check' className='checkbox-icon' />
      </div>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

export default Checkbox
