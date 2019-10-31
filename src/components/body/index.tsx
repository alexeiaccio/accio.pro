import React from 'react'
import uuid from 'uuid/v1'

import { PageBody } from '../../typings/page'
import { Text } from '../text'
import { WorkList } from '../work-list'
import { Section } from './styles'

type Props = Readonly<{
  body: Array<PageBody>
}>

export function Body({ body }: Props) {
  if (!body || (body && body.length === 0)) return null

  return (
    <div>
      {body.map(({ items, primary, __typename }) => {
        if (__typename === 'PrismicPageBodyWorks') {
          return <WorkList key={uuid()} items={items} />
        }
        if (__typename === 'PrismicPageBodyText') {
          return (
            <Section>
              <Text key={uuid()} primary={primary} />
            </Section>
          )
        }
        return null
      })}
    </div>
  )
}