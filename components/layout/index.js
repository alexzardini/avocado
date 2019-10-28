import React from 'react'
import Head from 'next/head'
import {Content, Header} from 'components/ui'

const Layout = ({page, children, withContent = false}) => (
  <>
    <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-itunes-app" content="app-id=1454724013" />
        <title>{page || "Avocado - O Delivery do seu bebê"}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400&display=swap" rel="stylesheet" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
    <Header />
    {withContent ? <Content>
        {children}
    </Content> : children}

    <style jsx global>{`
      body {margin: 0px;font-family: 'Lato';}
      h1, h2, h3, h4, h5, h6, strong, b, a, p, span, i {font-family: 'Lato'}
      img { max-width: 100%; max-height: 100%; }
    `}</style>
  </>
)

export default Layout
