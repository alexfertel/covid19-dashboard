import { Link } from 'gatsby';
import React from 'react';

const withHeaderClasses = WrappedIcon => () => <WrappedIcon className="w-5 h-5 text-gray-500 hover:text-gray-800" />;

const Logo = withHeaderClasses(({ className = 'w-5 h-5' }) => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    stroke="currentColor"
    viewBox="0 0 24 24"
    className={className}
  >
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
));

const GitHubIcon = withHeaderClasses(({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
));

const Header = () => (
  <header className="flex justify-between w-full px-5 py-4 text-gray-600 bg-transparent lg:px-8">
    <div className="flex justify-between">
      <Link to="/">
        <Logo className="w-5 h-5" />
      </Link>
      <Link to="/components" className="ml-4 text-gray-600">
        Components
      </Link>
    </div>

    <a href="https://github.com/Daher91/covid19-dashboard" rel="noopener noreferrer" target="_blank">
      <GitHubIcon />
    </a>
  </header>
);

export default Header;
