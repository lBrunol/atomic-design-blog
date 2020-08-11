import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import { useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('pink')}>Pink</button>
      <button onClick={() => setTheme('papayawhip')}>Papayawhip</button>
      <GlobalStyles theme={{ type: theme }} />
      <Component {...pageProps} />
    </>
  )
}

export default App
