import { Link } from 'gatsby';
import React from 'react';

const Header = () => (
  <header className="flex justify-between w-full px-5 py-4 text-gray-600 bg-transparent lg:px-8">
    <div className="flex justify-between">
      <Link to="/components" className="text-gray-600">
        Components
      </Link>
    </div>
    <div className="flex justify-between">
      <Link to="/gis" className="text-gray-600">
        Gis
      </Link>
    </div>
    <div className="flex justify-between">
      <Link to="/info" className="text-gray-600">
        Info
      </Link>
    </div>
  </header>
);

export default Header;
