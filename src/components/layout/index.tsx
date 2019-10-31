import React from 'react'
import { Global } from '@emotion/core'
import { css } from '@emotion/core'
import { useLocalStorage, useMedia } from 'react-use'

import '../../fonts/accio/stylesheet.css'
import '../../fonts/montserrat/stylesheet.css'

import globalStyles from './global'
import { DarkModeToggle } from './dark-mode-toggle'

type Props = Readonly<{
  children: JSX.Element | JSX.Element[]
}>

export function Layout({ children }: Props) {
  const isDarkPreferScheme = useMedia('(prefers-color-scheme: dark)')
  const [isDark, toggleDarkMode] = useLocalStorage('darkTheme', isDarkPreferScheme)

  return (
    <main
      css={css`
        ${isDark && `
          --bg-color: #000;
          --text-color: #FFF;
        `};
        background-color: var(--bg-color);
      `}
    >
      <Global styles={globalStyles} />
      {children}
      <div
        className="absolute"
        css={css`
          left: 0.8rem;
          top: 0.65rem;
        `}
      >
        <DarkModeToggle
          isDark={isDark}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </main>
  )
}
