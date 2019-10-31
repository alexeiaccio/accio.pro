import React from 'react'
import { css } from '@emotion/core'

type Props = Readonly<{
  letter: string
  x?: string | number
  y?: string | number
  id?: string
  vectorEffect?: 'non-scaling-stroke'
  strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
}>


export function LetterForSVG({ letter, ...props }: Props) {
  return (
    <text
      css={css`
        font-size: calc(7em + 1vw);
      `}
      {...props}
    >
      {letter}
    </text>
  )
}