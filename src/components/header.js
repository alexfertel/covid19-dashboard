import { Link } from 'gatsby';
import React from 'react';

const Logo = ({classes = "h-5 w-5 text-gray-600"}) => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className={classes}
  >
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const Header = () => (
  <header className="py-4 pl-5 lg:pl-8 w-full flex bg-transparent">
    <Link to="/">
      <Logo />
    </Link>
  </header>
);

export default Header;
