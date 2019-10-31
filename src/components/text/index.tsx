import * as React from 'react'

import { HTML } from '../html'
import { Text as TextProps } from '../../typings/slices'
import { TextContainer } from './styles'

type Props = Readonly<{
  primary: TextProps
}>

export function Text({ primary }: Props) {
  return (
    <TextContainer>
      <HTML>
        {primary.text.html}
      </HTML>
    </TextContainer>
  )
}