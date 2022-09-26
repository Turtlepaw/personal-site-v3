import { Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import { ReactNode, useState } from 'react'
import { InviteWidget } from '../components/invite'
import { Project } from '../components/project'
import styles from '../styles/Home.module.css'

function Image({ src, alt, className }: {
  alt?: string;
  src: string;
  className?: string;
}) {
  return (
    <NextImage src={`/${src}`} alt={alt || ''} className={className} width="75px" height="75px" />
  );
}

function Title({ children, image, description }: {
  children: string;
  image: string;
  description?: string;
}) {
  return (
    <div id={children.toLowerCase()}>
      <Center className='pt-6 pb-1'>
        <Image src={image} className='iconImage' alt='' /> <span className="text-6xl font-bold pb-2 pl-5">{children}</span>
      </Center>
      <Center className='font-semibold'>{description && <p className="text-2xl text-light pb-6">{description}</p>}</Center>
    </div>
  );
}

const Home: NextPage = () => {
  const [isHovering, setHover] = useState(false);
  return (
    <div className="text-white text-center pb-12">
      <div className='text-center py-10'>
        <Center>
          <div className="text-4xl font-bold">Hi there, I'm Turtlepaw.</div>
        </Center>
        <Center className='pt-2'>
          <div>
            <div className='bg-gray -500 bg-green-600 border-gray-300 border-opacity-70 bg-opacity-30 border-[.1rem] mx-2 my-3 rounded-md w-36 h-8 inline-block'>
              <Center className='pt-0.5 font-semibold'>
                <div className='rounded-full bg-green-600 hover:visible cursor-pointer px-2 py-2'>
                  {/*<img src='Dismiss.svg' className='w-7 px-1 py-1' />*/}
                </div>
                <div className='pl-2 pb-0.5'>
                  Programmer
                </div>
              </Center>
            </div>
            <div className='bg-gray -500 bg-blue-500 border-gray-300 border-opacity-70 bg-opacity-30 border-[.1rem] mx-2 my-3 rounded-md w-24 h-8 inline-block'>
              <Center className='pt-0.5 font-semibold'>
                <div className='rounded-full bg-blue-500 hover:visible cursor-pointer px-2 py-2'>
                  {/*<img src='Dismiss.svg' className='w-7 px-1 py-1' />*/}
                </div>
                <div className='pl-2 pb-0.5'>
                  Artist
                </div>
              </Center>
            </div>
          </div>
        </Center>
        <Center>
          <div className="font-semibold h-52 mx-5 w-[28rem] my-5 py-5 border-gray-500 border-2 rounded-lg bg-gray-500 bg-opacity-10 text-lg px-16 pt-2">
            <h1 className='font-bold uppercase pt-5 text-lg' id='about-me'>About Me</h1>
            <Center className='pt-5'>Hi there, I'm Turtlepaw! I enjoy building websites, playing games, and drawing.</Center>
          </div>
        </Center>
      </div>
      <div>
        <Title image='tools.svg' description='Skills and tools I use'>Skills</Title>
        <div>
          <Center>
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img src="https://skillicons.dev/icons?i=vue,ts,js,discord,express,git,md,mongodb,nodejs,stackoverflow,vscode,visualstudio,nextjs,react,dotnet&perline=3" alt='Skills/Tools' />
            }
          </Center>
        </div>
        <Title image='github.svg' description='Projects I&apos;m currently working on'>Projects</Title>
        <div>
          <Project
            Name="The Sims 4 Modding"
            IconURL="https://ts4mods.vercel.app/ts4m.svg"
            URL="https://ts4mods.vercel.app/"
            Description='The open-source Sims 4 mod listing website and mod manager'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
