import * as React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends React.HTMLAttributes<T> {
    css?: string
    cx?: string
    srcset?: string
    loading?: string
  }
  interface SVGProps<T> extends React.DOMAttributes<T> {
    css?: string
    cx?: string
  }
}
