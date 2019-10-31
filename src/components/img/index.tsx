import * as React from 'react'
import { css } from '@emotion/core'
import { get } from 'lodash'
import GatsbyImage from 'gatsby-image'
import tw from 'tailwind.macro'

import { Image as ImageProps } from '../../typings/image'

import { ImgHolder } from './holder'


interface ImgProps {
  src: ImageProps
  css?: string
  onLoad?: () => void
  onStartLoad?: () => void
}

export function Img({ src, ...props }: ImgProps) {
  const imageSharp = get(src, 'localFile.childImageSharp')
  const fluid = get(imageSharp, 'fluid')
  const fixed = get(imageSharp, 'fixed')
  const url = get(src, 'url')

  if (fluid) {
    return <GatsbyImage fluid={fluid} {...props} />
  }

  if (fixed) {
    return <GatsbyImage fixed={fixed} {...props} />
  }

  if (url) {
    return (
      <img
        loading="lazy"
        css={css`
          ${tw`w-full`};
        `}
        src={url}
        alt={get(src, 'alt', '')}
        {...props}
      />
    )
  }

  return <ImgHolder {...props} />
}
