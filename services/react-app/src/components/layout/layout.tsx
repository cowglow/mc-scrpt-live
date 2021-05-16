import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import HeaderComponent from '../header-component/header-component'
import FooterComponent from '../footer-component/footer-component'

import theme from '../../lib/theme'

interface LayoutProps {
  children: any
}

const Layout:React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent/>
      {children}
      <FooterComponent/>
    </ThemeProvider>
  );
};

export default Layout
