import Header from '../components/Header/Header'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
