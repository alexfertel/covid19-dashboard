import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SideBar from './sidebar';
// import Footer from './footer';

const Layout = ({ children }) => (
  <div className="flex min-h-screen antialiased">
    <nav className="w-80">
      <SideBar />
    </nav>
    <main className="bg-white">
      <Header />
      {children}
    </main>
    {/* <Footer /> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
