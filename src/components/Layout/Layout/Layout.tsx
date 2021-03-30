import * as React from 'react'

import Header from '../Header/Header'
import Heading from '../Head/Head'
import Footer from '../Footer/Footer'

type Props = {
    children?: React.ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <>
        <Heading title={title}></Heading>
        <Header></Header>
        {children}
        <Footer></Footer>
    </>
)

export default Layout
