import React, { ReactNode } from 'react'

type IconType = {
    children:ReactNode
}

export default function Icon({children}:IconType) {
  return {children}
}
