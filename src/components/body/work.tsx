import React from 'react'
import uuid from 'uuid/v1'

import { WorkBody } from '../../typings/work'
import { ImageGallery } from '../image-gallery'
import { Text } from '../text'
import { Section } from './styles'

type Props = Readonly<{
  body: Array<Partial<WorkBody>>
}>

export function Body({ body }: Props) {
  if (!body || (body && body.length === 0)) return null

  return (
    <div>
      {body.map(({ items, primary, __typename }) => {
        if (__typename === 'PrismicWorkBodyText') {
          return (
            <Section key={uuid()}>
              <Text primary={primary} />
            </Section>
          )
        }
        if (__typename === 'PrismicWorkBodyImageGallery') {
          return (
            <Section key={uuid()}>
              <ImageGallery items={items} />
            </Section>
          )
        }
        return null
      })}
    </div>
  )
}