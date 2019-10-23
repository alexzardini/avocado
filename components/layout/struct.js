import React from 'react'
import Head from 'next/head'

import Content from '../content'
import Header from '../header'

const Layout = ({page, children}) => (
  <div className="root">
    <Head>
      <title>{page || "Avocado"}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' href='/style.css' />
    </Head>
    <Header />
    <Content>
        {children}
    </Content>

    <style jsx>{`
      body {padding: 0; margin: 0 !important;}
      div {padding: 0; margin: 0;}
    `}</style>
  </div>
)

export default Layout
