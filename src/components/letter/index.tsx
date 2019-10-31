import React from 'react'
import { css } from '@emotion/core'

type Props = Readonly<{
  letter: string
  width?: number
}>

export function Letter({ letter, width = 100 }: Props) {
  return (
    <span
      className={`
        flex flex-no-wrap
        items-center justify-center
      `}
      css={css`
        font-size: calc(2.25em + 10 * (${width}vw / ${width / 2}));
        max-width: ${width}%;
        text-shadow: 0 0 1px var(--text-color);
        transition: color 400ms ease-in-out;
        &:hover {
          color: var(--text-color);
        }
      `}
    >
      {letter}
    </span>
  )
}
