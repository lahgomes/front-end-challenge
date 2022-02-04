import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

 html, body, #__next {
    min-height: 100vh;
  }
  
  body {
    font-size: 16px;
    font-family: ${props => props.theme.fontFamily}
  }

  .mySwiper {
    height: 100%;
    width: 100%;
  }

  .swiper-wrapper {
    height: 10rem;
  }
`

export default GlobalStyles
