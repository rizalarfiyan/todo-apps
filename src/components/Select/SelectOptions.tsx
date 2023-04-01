import clsx from 'clsx'
import React from 'react'

import Icon from '@components/Icon'

import { useSelectContext } from './Select'
import { SelectOptionProps } from './Select.types'

const SelectOption = (props: SelectOptionProps) => {
  const { value, index, disabled, className, children, ...rest } = props

  const {
    selectedIndex,
    setSelectedIndex,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    getItemProps,
    dataRef,
  } = useSelectContext()

  function handleSelect() {
    setSelectedIndex(index as number)
    onChange(value as string)
    setOpen(false)
    setActiveIndex(null)
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (
      event.key === 'Enter' ||
      (event.key === ' ' && !dataRef.current.typing)
    ) {
      event.preventDefault()
      handleSelect()
    }
  }

  return (
    <li
      {...rest}
      role='option'
      ref={(node) => (listRef.current[index as number] = node)}
      className={clsx('select-item', className)}
      disabled={disabled}
      tabIndex={activeIndex === index ? 0 : 1}
      aria-selected={activeIndex === index && selectedIndex === index}
      data-selected={selectedIndex === index}
      {...getItemProps({
        onClick: (e: any) => {
          const onClick = rest?.onClick
          if (typeof onClick === 'function') {
            onClick(e)
            handleSelect()
            return
          }
          handleSelect()
        },
        onKeyDown: (e: any) => {
          const onKeyDown = rest?.onKeyDown
          if (typeof onKeyDown === 'function') {
            onKeyDown(e)
            handleKeyDown(e)
            return
          }
          handleKeyDown(e)
        },
      })}
    >
      {children}
      {selectedIndex === index && <Icon type='check' className='h-4 w-4' />}
    </li>
  )
}

export default SelectOption
