import { Outlet } from 'react-router-dom';

type Props = {};

const Layout = (props: Props) => {
  return (
    <div>
      <section>header</section>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
