import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header className="flex justify-between w-full px-5 py-4 text-gray-600 bg-transparent lg:px-8">
    <div className="flex justify-between">
      <Link to="/components" className="text-gray-600">
        Components
      </Link>
    </div>
  </header>
);

export default Header;
