import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* BASE STYLES */
  :root {
  --base: 2rem;
  }

  @media (max-width: 600px) {
    :root {
      --base: 1.5rem;
    }
  }

  body {
    font-family: 'Montserrat Alternates';
    font-weight: 400;
    font-size: var(--base);
    line-height: var(--base);
    color: #261A12;
  }
`

export default baseStyles