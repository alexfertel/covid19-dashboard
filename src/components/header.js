import { Link } from 'gatsby';
import React from 'react';
import { GitHubIcon } from '../global/icons';

const withHeaderClasses = WrappedIcon => () => <WrappedIcon className="w-5 h-5 text-gray-500 hover:text-gray-800" />;

const StyledGithubIcon = withHeaderClasses(GitHubIcon);

const Header = () => (
  <header className="flex justify-between w-full px-5 py-4 text-gray-600 bg-transparent lg:px-8">
    <div className="flex justify-between">
      <Link to="/components" className="text-gray-600">
        Components
      </Link>
    </div>

    <a href="https://github.com/Daher91/covid19-dashboard" rel="noopener noreferrer" target="_blank">
      <StyledGithubIcon />
    </a>
  </header>
);

export default Header;
