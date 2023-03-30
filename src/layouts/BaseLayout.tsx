import React from 'react'
import { Outlet } from 'react-router-dom'

const BaseLayout = (): JSX.Element => {
  return (
    <>
      <Outlet />
    </>
  )
}

export default BaseLayout
