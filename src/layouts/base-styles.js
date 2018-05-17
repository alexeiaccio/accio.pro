import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const baseStyles = () => injectGlobal`
  ${reset}
  /* BASE STYLES */

  body {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 10px;
    color: #261A12;
  }

  h1,h2,h3,h4,h5,h6,cite {
    font-family: 'Podkova'
  }
`

export default baseStyles