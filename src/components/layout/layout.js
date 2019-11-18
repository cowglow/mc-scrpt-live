import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@material-ui/core/styles'

import HeaderComponent from '../header-component/header-component'
import FooterComponent from '../footer-component/footer-component'

import theme from '../../lib/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent/>
      {children}
      <FooterComponent/>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout
