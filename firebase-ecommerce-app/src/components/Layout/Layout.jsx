import React from 'react';
import Header from '../Header/Header';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define an array of paths where you want to hide the header and footer
  const pathsWithoutHeaderFooter = ['/', '/signup'];

  // Check if the current path is in the array
  const shouldHideHeaderFooter = pathsWithoutHeaderFooter.includes(location.pathname);

  if (shouldHideHeaderFooter) {
    return (
      <div>
        <Routers />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

