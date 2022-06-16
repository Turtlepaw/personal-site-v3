import { Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import { ReactNode } from 'react'
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
  children: ReactNode;
  image: string;
  description?: string;
}) {
  return (
    <>
      <Center className='pt-6 pb-1'>
        <Image src={image} className='iconImage' alt='' /> <span className="text-6xl font-bold grTitle pl-5">{children}</span>
      </Center>
      <Center>{description && <p className="text-2xl text-light pb-6">{description}</p>}</Center>
    </>
  );
}

const Home: NextPage = () => {
  return (
    <div className="text-white text-center pb-12">
      <div className='text-center py-10'>
        <Center>
          <div className='border-gray-500 border-4 py-5 pb-7 mb-5 w-96'>
            <div className="text-6xl font-bold">Hey! I&apos;m <span className="grPageTitle">Turtlepaw</span></div>
            <div className='text-light text-2xl pt-2'>I&apos;m a developer and gamer</div>
          </div>
        </Center>
        <div className="grPageTitle text-4xl font-bold">Full Bio</div>
        <Center>
          <hr className='w-36 my-5' />
        </Center>
        <div className="font-bold text-lg px-16 pt-2">
          Hey there! I&apos;m Turtlepaw, I like to <span className="grDescription">code, draw, and play games like Halo!</span> I also like to create <span className="grDescription">Discord bots and Node.js packages</span> for <span className="blurpleText">Discord</span>. You can contact me through <a href="/r/myDiscord" className='text-blurple underline'>Discord</a> or <a href="mailto:hi.homepage@trtle.xyz" className='text-blurple underline'>Email</a>! My favorite programming language is <span className='grDescription'>TypeScript</span>.
        </div>
      </div>
      <div>
        <Title image='discord.svg' description='My Discord Servers'>Discords</Title>
        <div>
          <InviteWidget InviteURL="https://discord.gg/6ed58Kmjqu" />
          <InviteWidget InviteURL="https://discord.gg/SJHn4bhRJa" />
          <InviteWidget InviteURL="https://discord.gg/jH5Cg5mzyP" />
        </div>
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
        <div className='projects'>
          <Project
            Name="Horizon"
            IconURL="https://horizon.trtle.xyz/ico_rounded.svg"
            URL="https://horizon.trtle.xyz/"
            Description='The TS-built, feature-rich, open-source, multipurpose Discord bot'
          />
          <Project
            Name="The Sims 4 Modding"
            IconURL="https://ts4mods.vercel.app/ts4m.svg"
            URL="https://ts4mods.vercel.app/"
            Description='The open-source Sims 4 mod listing website and mod manager'
          />
          <Project
            Name="Discord Trivia"
            IconURL="https://cdn.discordapp.com/icons/933113625537835049/e36e3ddcc37019459f1562c5f4e8e5b2.png"
            URL="https://discord.gg/jH5Cg5mzyP"
            Description='Discord Trivia is a Discord.JS based NodeJS library that provides powerful trivia match functionality to your Discord bot.'
          />
        </div>
        <Title image='discordstatus.svg' description='My Discord status provided by Lanyard'>Discord Status</Title>
        <div>
          <a href="https://discord.com/users/820465204411236362">
            <Center>
              {
                // eslint-disable-next-line @next/next/no-img-element
                <img src="https://lanyard.cnrad.dev/api/820465204411236362" alt='Status' />
              }
            </Center>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
