import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* BASE STYLES */
  :root {
  --base: 2rem;
  --color: #261A12;
  }

  @media (max-width: 600px) {
    :root {
      --base: 2rem;
      --color: #F2E8E8;
    }
  }

  body {
    font-family: 'Montserrat Alternates' sans-serif;
    font-weight: 400;
    font-size: var(--base);
    line-height: var(--base);
    color: var(--color);
  }

  em {
    font-style: italic;
  }
`

export default baseStyles