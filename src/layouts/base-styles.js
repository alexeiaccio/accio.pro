import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* BASE STYLES */
  :root {
  --base: 3rem;
  }

  @media (max-width: 600px) {
    :root {
      --base: 1.5rem;
    }
  }

  body {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: var(--base);
    line-height: var(--base);
    color: #261A12;
  }

  h1,h2,h3,h4,h5,h6,cite {
    font-family: 'Podkova'
  }
`

export default baseStyles