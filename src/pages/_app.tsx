import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Global from '../styles/global'
import theme from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Global/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
