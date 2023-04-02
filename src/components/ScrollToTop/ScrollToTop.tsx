import clsx from 'clsx'
import React, { forwardRef, useEffect, useState } from 'react'

import Icon from '@components/Icon'

import { scrollToTop } from '@utils/components'

import { ScrollToTopProps } from './ScrollToTop.types'

import { DEFAULT_SCROLL_TOP_OFFSET } from '@/constants'

const ScrollToTop = forwardRef<HTMLButtonElement, ScrollToTopProps>(
  (props, ref) => {
    const { iconType, notSmooth, className, top, ...rest } = props
    const topPos = top || DEFAULT_SCROLL_TOP_OFFSET
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
      const onScroll = () => {
        setVisible(document.documentElement.scrollTop >= topPos)
      }
      onScroll()
      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
    }, [topPos])

    return (
      <button
        type='button'
        ref={ref}
        className={clsx('scroll-to-top', visible && 'active', className)}
        onClick={() => scrollToTop(!notSmooth)}
        aria-label='Scroll to top'
        {...rest}
      >
        <Icon width={32} height={32} type={iconType || 'arrow'} />
      </button>
    )
  }
)

ScrollToTop.displayName = 'ScrollToTop'

export default ScrollToTop
