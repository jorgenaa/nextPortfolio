import React, { FC, ReactNode } from 'react'
import Head from "next/head"

import Footer from '../Footer'
import Header from '../Header'
import styles from "./Layout.module.scss"

interface Props  {
    title: string;
    keywords: string;
    description: string;
    children: ReactNode | ReactNode[]
}

const Layout: FC <Props> = ({children, title, keywords, description}) => {
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