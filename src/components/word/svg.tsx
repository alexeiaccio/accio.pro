import React from 'react'
import { get } from 'lodash'
import { css } from '@emotion/core'

import { Image } from '../../typings/image'
import { Img } from '../img'
import { LetterForSVG } from '../letter/text'
import { svgStyles } from './styles'

type Props = Readonly<{
  word: string | null
  image?: Image
  theme?: string
  clipped?: boolean
  viewBox?: string
}>

export function WordSVG({ image, word, theme = '(var(--bg-color)', clipped, viewBox = `0 0 600 160` }: Props) {
  if (!word || (word && word.length === 0)) return null
  
  const text = word.replace(' ', '')
  const src = get(image, 'localFile.childImageSharp.fluid.src', get(image, 'url'))

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={`
        font-accio
        select-none
        w-full
      `}
      css={css`
        ${svgStyles};
        color: ${theme};
      `}
    >
      <defs>
        <LetterForSVG
          x="0%"
          y="86%"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          id={`word-${text}`}
          letter={text.toUpperCase()}
        />
        <clipPath id={`clipPath-${text}`}>
          <LetterForSVG
            x="0%"
            y="86%"
            letter={text.toUpperCase()}
          />
        </clipPath>
        <clipPath id={`clip-${text}`}>
          <use xlinkHref={`#word-${text}`} />
        </clipPath>
      </defs>
      {!clipped && src && (
        <switch>
          <foreignObject
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
          >
            <Img
              src={image}
            />
          </foreignObject>

          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            xlinkHref={src}
          />
        </switch>
      )}
      <rect
        className="back"
        x="0"
        y="0"
        width="100%"
        height="100%"
        css={css`
          fill: ${theme};
        `}
      />
      {src ? (
        <switch>
          <foreignObject
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            clipPath={`url(#clipPath-${text})`}
          >
            <Img
              src={image}
            />
          </foreignObject>

          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            clipPath={`url(#clipPath-${text})`}
            xlinkHref={src}
          />
        </switch>
      ) : (
          <use
            fill="var(--text-color)"
            xlinkHref={`#word-${text}`}
            clipPath={`url(#clip-${text})`}
          />
        )}
      <use
        className="hover"
        xlinkHref={`#word-${text}`}
        clipPath={`url(#clip-${text})`}
      />
    </svg>
  )
}

export default WordSVG
