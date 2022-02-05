import GlobalStyles from '../styles/global'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'

import 'swiper/css'
import 'swiper/css/scrollbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
