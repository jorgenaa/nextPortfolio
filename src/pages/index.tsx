import { ReactNode, useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//Components
import { Hero, About, Contact, Header, Layout, Portfolio, Skills } from '../components'
import { Navbar } from '../components/Nav';

const Home: NextPage = () => {
  return (
   <Layout title={''} keywords={''} description={''}>
      {/* <Header setToggleNavbar={setToggleNavbar} toggleNavbar={toggleNavbar} btnRef={btnRef} />  */}
      <Hero />
      <About />
      <Skills  />
      <Portfolio  />
      <Contact />
   </Layout>
  )
}

export default Home
