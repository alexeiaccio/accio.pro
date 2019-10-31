import * as React from 'react'
// import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export const Holder = tw.div`
  bg-black
  flex items-center justify-center
  h-full w-full
  overflow-hidden
  rounded-sm
`

export const ImgHolder = props => (
  <Holder
    {...props}
  />
)