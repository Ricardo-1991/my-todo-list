import React, { ReactChild, ReactNode } from 'react'
import '../Container/StyleContainer.css'

type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <>
      <div className="toDoContainer">{children}</div>
    </>
  )
}
