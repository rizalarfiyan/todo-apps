import clsx from 'clsx'
import React, { forwardRef, useEffect, useState } from 'react'

import { NavigationProps } from './Navigation.types'

import { COMPONENT } from '@/constants'

const Navigation = forwardRef<HTMLDivElement, NavigationProps>((props, ref) => {
  const { title, links, isFixed, fixedOffset, ...rest } = props

  const [isActive, setIsActive] = useState(false)
  const topOffset = fixedOffset || COMPONENT.navigation.scrollOffset

  useEffect(() => {
    if (!isFixed) return
    const onScroll = () => {
      setIsActive(document.documentElement.scrollTop >= topOffset)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [topOffset])

  return (
    <nav
      ref={ref}
      className={clsx(
        'z-30 w-full bg-blue-500 py-6 shadow-lg transition-all duration-300 ease-in-out md:py-8',
        isFixed && 'fixed',
        isActive && '!py-3'
      )}
      {...rest}
    >
      <div className='container flex items-center justify-between text-white'>
        <h1 className='text-xl font-semibold md:text-2xl'>
          {title.toUpperCase()}
        </h1>
        <div>
          {(links || []).map((val, idx) => {
            return <div key={idx}>{val.name}</div>
          })}
        </div>
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation
