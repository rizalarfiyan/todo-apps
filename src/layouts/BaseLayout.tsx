import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '@components/Navigation'
import ScrollToTop from '@components/ScrollToTop'

import { APP_TITLE } from '@/constants'

const BaseLayout = (): JSX.Element => {
  return (
    <>
      <header>
        <Navigation
          title={APP_TITLE}
          isFixed
          links={[
            {
              link: 'https://github.com/rizalarfiyan/todo-apps',
              icon: 'github',
              variant: 'light',
              isBlank: true,
            },
          ]}
        />
      </header>
      <main className='h-full min-h-screen w-full pt-28 md:pt-36'>
        <Outlet />
        <ScrollToTop />
      </main>
    </>
  )
}

export default BaseLayout
