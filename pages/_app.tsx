import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import Layout from '@/components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return(
  <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>
  )
}
