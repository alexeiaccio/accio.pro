import React from 'react'
import { css } from '@emotion/core'

import { Letter } from '../letter'

type Props = Readonly<{
  word: string | null
}>

export function Word({ word }: Props) {
  if (!word || (word && word.length === 0)) return null

  const letters = word.split('')

  return (
    <div
      className={`
        font-accio
        flex justify-between
        relative
        select-none
      `}
      css={css`
        color: var(--bg-color);
      `}
    >
      {letters.map((letter, index) => {
        return (
          <Letter
            key={`${letter}-${index}`}
            letter={letter}
            width={100 / word.length}
          />
        )
      })}
    </div>
  )
}
