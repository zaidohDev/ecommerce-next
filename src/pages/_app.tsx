import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps){
  return (
    <>
      <Head>
        <title> React Avançado - Boileplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta 
          name="description"
          content="A simple project starter to work wich Typescript, React, Next and
          Styled components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />);
    </>
  )
}

export default App
