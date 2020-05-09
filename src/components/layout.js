import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SideBar from './Sidebar';

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
