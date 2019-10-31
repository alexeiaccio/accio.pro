import React from 'react'
import { Link } from 'gatsby'
import uuid from 'uuid/v1'

import { WordSVG } from '../word/svg'
import { Work } from '../../typings/slices'

type Props = Readonly<{
  items: Array<Work>
}>

export function WorkList({ items }: Props) {
  if (!items || (items && items.length === 0)) return null

  return (
    <div>
      {items.map(({ work }) => {
        const title = work.document.data.title.text
        const theme = work.document.data.theme
        const image = work.document.data.image

        return (
          <Link key={uuid()} to={work.uid}>
            <WordSVG
              image={image}
              word={title}
              theme={theme}
              clipped
            />
          </Link>
        )
      })}
    </div>
  )
}