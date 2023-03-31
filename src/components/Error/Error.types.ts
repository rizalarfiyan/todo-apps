import React, { ReactNode } from 'react'

export interface IErrorProps {
  code?: string | ReactNode
  title?: string | ReactNode
  subtitle?: string | ReactNode
}

export type ErrorProps = React.HTMLAttributes<HTMLDivElement> & IErrorProps

export interface NotFoundProps {
  parentPath?: string
}
