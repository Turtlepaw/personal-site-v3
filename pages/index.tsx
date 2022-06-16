import { Center } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import { InviteWidget } from '../components/invite'
import { Project } from '../components/project'
import styles from '../styles/Home.module.css'

function Image({ src, alt, className }: {
  alt?: string;
  src: string;
  className?: string;
}){
  return (
    <NextImage src={`/${src}`} alt={alt || ''} className={className} width="75px" height="75px" />
  );
}

const Home: NextPage = () => {
  return (
    <div className="mt-10 text-white text-center pb-12">
      <div className='text-center py-10'>
        <div className="text-6xl font-bold">Hey! I&apos;m <span className="grPageTitle">Turtlepaw</span></div>
        <div className="grPageTitle text-4xl font-bold pt-5">Bio:</div>
        <div className="font-bold text-lg px-16 pt-2">Hey there! I&apos;m Turtlepaw, I like to <span className="grDescription">code, draw, and play games like siege!</span> I also like to create <span className="grDescription">Discord bots and NPM/Yarn packages</span> for <span className="blurpleText">Discord</span>. You can contact me through <a href="r/myDiscord">Discord</a> or <a href="r/emailMe">Email</a>! My favorite coding language is JS and TS. </div>
      </div>
      <div>
        <Image src="discord.svg" className='iconImage' alt='' /> <span className="text-6xl font-bold grTitle">Discords</span>
        <div>
          <Center>
            <InviteWidget InviteURL="https://discord.gg/6ed58Kmjqu" />
            <br />
            <InviteWidget InviteURL="https://discord.gg/SJHn4bhRJa" />
            <br />
            <InviteWidget InviteURL="https://discord.gg/jH5Cg5mzyP" />
            <br />
          </Center>
        </div>
        <Image src="tools.svg" className='iconImage' alt='' /> <span className="text-6xl font-bold grTitle">Skills</span>
        <div>
          <Center>
            <Image src="https://skillicons.dev/icons?i=vue,ts,js,discord,express,git,md,mongodb,nodejs,stackoverflow,vscode,visualstudio,nextjs,react,dotnet&perline=3" alt='' />
          </Center>
        </div>
        <Image src="github.svg" className='iconImage' alt='' /> <span className="text-6xl font-bold grTitle">Projects</span>
        <div className='projects'>
          <Center>
            <Project Name="Horizon" IconURL="https://horizon.trtle.xyz/ico_rounded.svg" URL="https://horizon.trtle.xyz/" />
            <Project Name="The Sims 4 Modding" IconURL="https://ts4mods.vercel.app/ts4m.svg" URL="https://ts4mods.vercel.app/" />
            <Project Name="Discord Trivia" IconURL="https://cdn.discordapp.com/icons/933113625537835049/e36e3ddcc37019459f1562c5f4e8e5b2.png" URL="https://discord.gg/jH5Cg5mzyP" />
          </Center>
        </div>
        <Image src="discordstatus.svg" className='iconImage' alt='' /> <span className="text-6xl font-bold grTitle">Status</span>
        <div>
          <a href="https://discord.com/users/820465204411236362">
            <Center>
              <Image src="https://lanyard.cnrad.dev/api/820465204411236362" alt='Status' />
            </Center>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
