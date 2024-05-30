import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { LayoutContainer } from '@/styles/layout.style';

import { Outlet } from 'react-router-dom';

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
      <Footer />
    </div>
  );
};

export default Layout;
