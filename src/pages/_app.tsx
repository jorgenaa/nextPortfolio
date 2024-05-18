import '../styles/base.css';
import '../styles/globale.scss'
import type { AppProps } from 'next/app' 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
