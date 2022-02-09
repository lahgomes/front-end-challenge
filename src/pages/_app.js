import GlobalStyles from '../styles/global'
import { GlobalStorage } from '../context'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

import Header from '../components/Header'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStorage>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalStorage>
    </>
  )
}

export default MyApp
