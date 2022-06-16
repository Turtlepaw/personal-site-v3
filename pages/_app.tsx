import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: any) => (url === router.asPath) && setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return loading && (
    <>
      <div className="spinner" />
      <div className="cube1"></div>
      <div className="cube2"></div>
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='body'>
      <ChakraProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Turtlepaw</title>
        <link rel="icon" href="https://github.com/turtlepaw.png" />
        <meta content="Turtlepaw" property="og:title" />
        <meta content="https://trtle.xyz/" property="og:url" />
        <meta content="https://github.com/turtlepaw.png" property="og:image" />
        <meta content="#5865F2" data-react-helmet="true" name="theme-color" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
    </div>
  );
}

export default MyApp
