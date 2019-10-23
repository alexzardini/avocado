import React from 'react'
import Head from 'next/head'

import Content from '../content'
import Header from '../header'

const Layout = ({page, children}) => (
  <div className="root">
    <Head>
      <title>{page || "Avocado"}</title>
      <link rel='icon' href='/favicon.ico' />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet"></link>
    </Head>
    <Header />
    <Content>
        {children}
    </Content>

    <style jsx global>{`
      body {margin: 0px;}
      h1, h2, h3, h4, h5, h6, strong, b, a, p, span, i {font-family: 'Roboto'}
      img { max-width: 100%; max-height: 100%; }
    `}</style>
  </div>
)

export default Layout
