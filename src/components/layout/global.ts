import { css } from '@emotion/core'

export default css`
  :root {
    --base-font-size: 16px;
    --bg-color: #FFF;
    --text-color: #000;
  }

  html {
    font-size: var(--base-font-size);
    font-family: 'Montserrat Alternates', sans-serif;
  }
`

/* 
  calc([size-min]em + ([size-max] - [size-min]) * ((100vw - [start]em) / ([start] - [stop])))
  calc(2.25em + (2.75) * ((100vw - 25em) / (50)))
*/
