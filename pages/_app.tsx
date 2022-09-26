import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { Button, Center, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Image from 'next/image';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

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
}) {
  return (
    <a href={href} className='px-3 text-blurple'>
      {children}
    </a>
  );
}

const colours = {
  'blurple': '#5865F2',
  'blurple.500': '#5865F2',
  'green': '#2d7d46',
  'red': '#ED4245',
  'grey.extralight': '#ebedef',
  'grey.light': '#4f545c',
  'grey.dark': '#36393f',
  'grey.extradark': '#292b2f'
};

const theme = extendTheme({
  colors: colours,
  components: {
    Button: {
      baseStyle: {
        color: 'white',
        fontWeight: '500',
        padding: '16px 2px',
        borderRadius: '3px',
        _focus: { boxShadow: 'none' }
      },
      variants: {
        primary: {
          bg: 'blurple',
          _hover: { bg: '#4752c4' }
        },
        secondary: {
          bg: 'grey.light',
          _hover: { bg: '#686d73' }
        },
        success: {
          bg: 'green',
          _hover: { bg: '#215b32' }
        },
        danger: {
          bg: 'red',
          _hover: { bg: '#a12d2f' }
        },
        link: {
          bg: 'transparent',
          color: 'white',
          _hover: {
            textDecoration: 'underline'
          }
        }
      },
      defaultProps: {
        variant: 'secondary',
      }
    },
    Input: { defaultProps: { variant: 'normal' } },
    FormLabel: { baseStyle: { marginBottom: '0px' } },
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='body'>
      <ChakraProvider theme={theme}>
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
          <Center className='text-center pt-5'>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton as={Button} rightIcon={<img src={isOpen ? "Up.svg" : "Down.svg"} />} bgColor="dark-gray" textColor="white">
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <a href='#about-me'>
                        About Me
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href='#projects'>
                        My Projects
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href='#skills'>
                        My Skills
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href='mailto:hi@trtle.xyz'>
                        Email Me
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href='https://discord.com/users/820465204411236362'>
                        My Discord Profile
                      </a>
                    </MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          </Center>
          <Component {...pageProps} />
        </>
      </ChakraProvider>
    </div>
  );
}

export default MyApp
