import * as React from 'react'
import uuid from 'uuid/v1'

import { Img } from '../img'
import { Gallery } from '../../typings/slices'
import { HTML } from '../html'
import { Caption } from './styles'

type Props = Readonly<{
  items: Array<Gallery>
}>

export function ImageGallery({ items }: Props) {
  if (!items || (items && items.length === 0)) return null

  return (
    <div>
      {items.map(item => (
        <React.Fragment key={uuid()}>
          <Img src={item.galleryimage} />
          <Caption>
            <HTML>
              {item.gallerycaptions.html}
            </HTML>
          </Caption>
        </React.Fragment>
      ))}
    </div>
  )
}