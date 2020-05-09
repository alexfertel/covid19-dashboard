import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import SideBar from './Sidebar';

const Layout = ({ children }) => (
  <div className="flex min-h-screen antialiased">
    <nav className="w-112">
      <SideBar />
    </nav>
    <main className="w-full -ml-8 overflow-hidden bg-white shadow-xl rounded-2xl">
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
