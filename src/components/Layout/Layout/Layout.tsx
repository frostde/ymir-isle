import * as React from 'react'

import Header from '../Header/Header';
import Heading from '../Head/Head';

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Heading title={title}></Heading>
    <Header></Header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
