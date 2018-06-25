import React, { Fragment } from 'react'
import styled from 'styled-components'

import {
  AccioSVG,
  Description,
  MailLink
} from 'Elements'

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100wv;
`

export default ({ data }) => (
  <MainWrapper>  
    <AccioSVG />
    <Description description={data.description[0]}/>
    <MailLink
      url={data.maillink.url}
      definitions={{
        want: data.definitionswant,
        sites: data.definitionssites,
        list: data.definitionslist,
        get: data.definitionget,
        verbs: data.definitionverbs,
        adjectives: data.definitionadjectives,
        nouns: data.definitionnouns,
      }}
    />
    <Description description={data.description[1]}/>
  </MainWrapper>
)