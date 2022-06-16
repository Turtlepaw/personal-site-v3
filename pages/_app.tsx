import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import Image from 'next/image';

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {
        loading == true ?
          (
            <><div className="spinner" /><div className="cube1"></div><div className="cube2"></div></>
          ) : null
      }
    </>
  );
}

function Link({ href, children }: {
  href: string,
  children: ReactNode
}){
  return (
    <a href={href} className='px-3 text-blurple'>
      {children}
    </a>
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
        <>
          <Center className='text-center text-white text-5xl font-bold pt-5'>
            <Link href='/r/discord'>
              Discord
            </Link>
            <Image alt='' src="https://github.com/turtlepaw.png" width="45px" height="45px" className='rounded-full'/>
            <Link href='mailto:hi.homepage@trtle.xyz'>
              Email
            </Link>
          </Center>
          <Component {...pageProps} />
        </>
      </ChakraProvider>
    </div>
  );
}

export default MyApp
