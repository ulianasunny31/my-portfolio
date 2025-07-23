import Aside from './components/Aside';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';

const Layout = () => {
  return (
    <div className="page">
      <Aside /> <Header />
      <div className="page-content">
        <Outlet />
        <FeedbackForm className="form feedbackFormFooter" />
      </div>
    </div>
  );
};

export default Layout;
