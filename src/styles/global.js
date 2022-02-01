import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;;
    --dark-purple: #2D0C5E;
    --purple: #5C16C5;
    --black: #000000;
    --gray: #646464;
    --orange: #D18000;
    --green: #14FF00;
    --light: 300;
    --normal: 400;
    --medium: 500;
    --bold: 700;
    --font-family: "Roboto","Helvetica","Arial",sans-serif
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

 html, body, #__next {
    min-height: 100vh;
  }
  
  body {
    font-size: 16px;
    font-family: var(--font-family)
  }
`

export default GlobalStyles
