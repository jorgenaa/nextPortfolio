import React, { FC, ReactNode, useState } from 'react'
import { Metadata } from 'next'
import Head from "next/head"

import Footer from '../Footer'
import Header from '../Header'
import useAutoClose from '../../Hooks/useAutoClose';
import styles from "./Layout.module.scss"

export const metadata: Metadata = {
    title: "Jørgen's portfolio",
    description: "Created by Jørgen Årnes" 
}

interface Props  {
    title: string;
    keywords: string;
    description: string;
    children: ReactNode | ReactNode[]
}

const Layout: FC <Props> = ({children, title, keywords, description}) => {
    const [toggleNavbar, setToggleNavbar] = useState(false)
    const [useClickOutside] = useAutoClose();

    let btnRef = useClickOutside(() => {
        setToggleNavbar(false)
    })
  return (
    <div className={styles.stickyContainer}>
        <Head>
            <title>{title}</title>
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {/* <script src="https://js.stripe.com/v3" /> */}
        </Head>
        <Header setToggleNavbar={setToggleNavbar} toggleNavbar={toggleNavbar} btnRef={btnRef} />
        <main className={styles.wrapper}>
            {children}
        </main>
        <Footer />
    </div>
    
  )
}

Layout.defaultProps = {
    title: 'My Portfolio',
    description: '',
    keywords: 'React, Nextjs, Mongodb, Stripe, Sass, CSS, HTML, Bootstrap, Tailwind, Typescript'
}

export default Layout