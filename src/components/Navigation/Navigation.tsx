import clsx from 'clsx'
import React, { forwardRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Button from '@components/Button'
import Icon from '@components/Icon'

import { NavigationProps } from './Navigation.types'

import { COMPONENT } from '@/constants'

const Navigation = forwardRef<HTMLDivElement, NavigationProps>((props, ref) => {
  const location = useLocation()
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

  const titleElement = (
    <h1 className='text-xl font-semibold md:text-2xl'>{title.toUpperCase()}</h1>
  )

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
        {location.pathname === '/' ? (
          titleElement
        ) : (
          <Link to='/'>{titleElement}</Link>
        )}
        <div>
          {(links || []).map((val, idx) => {
            return (
              <Button.Link
                variant={val.variant}
                color={val.color}
                to={val.link}
                target={val.isBlank ? '_blank' : undefined}
                key={idx}
                isIcon={!!val?.icon}
              >
                {val?.icon ? (
                  <Icon type={val?.icon} className='h-5 w-5' />
                ) : (
                  val.name
                )}
              </Button.Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation
