import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '@components/Navigation'

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
              link: 'https://google.com/',
              name: 'Google',
            },
          ]}
        />
      </header>
      <main className='h-full min-h-screen w-full pt-28 md:pt-36'>
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout
