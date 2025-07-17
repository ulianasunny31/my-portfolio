import Aside from './components/Aside';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const Layout = () => {
  return (
    <div className="page">
      <Aside /> <Header />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
