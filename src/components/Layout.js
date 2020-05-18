import React from 'react';
import PropTypes from 'prop-types';

import SideBar from './Sidebar';

const Layout = ({ children }) => (
  <div className="relative min-h-screen bg-gray-300">
    <div className="absolute inset-0 flex mx-8 my-10 antialiased shadow-lg rounded-2xl">
      <nav className="w-112">
        <SideBar />
      </nav>
      <main className="w-full -ml-8 overflow-hidden bg-gray-1 rounded-2xl">
        {children}
      </main>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
