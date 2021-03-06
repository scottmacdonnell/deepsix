import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.scss'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

function deepsix({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
      </Head>

      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default deepsix