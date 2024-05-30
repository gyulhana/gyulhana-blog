import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { LayoutContainer } from '@/styles/layout.style';
import React from 'react';

import { Outlet } from 'react-router-dom';

const Layout = () => (
  <React.Fragment>
    <Header />
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
    <Footer />
  </React.Fragment>
);

export default Layout;
