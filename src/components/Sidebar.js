import React, { useState } from 'react';
import { Link } from 'gatsby';
import { LogoIcon, DashboardIcon, GitHubIcon, WorldIcon } from '../global/icons';

const IconsSection = () => (
  <div className="flex flex-col w-32 bg-white shadow-md rounded-2xl text-cool-2">
    <div className="flex flex-col items-center h-full px-4 py-4 mr-12 justify-evenly">
      <Link to="/">
        <LogoIcon className="w-8 h-8 text-purple-600" />
      </Link>
      <div className="flex items-center justify-center h-full text-gray-800">
        <span className="flex items-center justify-center w-10 h-10 rounded-lg opacity-75 cursor-pointer hover:bg-gray-500 hover:text-gray-900">
          <WorldIcon className="w-8 h-8" />
        </span>
      </div>
      <a href="https://github.com/Daher91/covid19-dashboard" rel="noopener noreferrer" target="_blank">
        <GitHubIcon className="w-8 h-8 text-gray-600 hover:text-gray-800" />
      </a>
    </div>
  </div>
);

const TitlesSection = () => (
  <div className="w-full py-5 pl-4 -ml-12 bg-gray-300 shadow-md text-cool-5 rounded-l-2xl">
    <div className="flex items-center pt-1 pl-2 opacity-50">
      <DashboardIcon className="w-4 h-4 stroke-2" />
      <p className="ml-4 text-sm font-semibold tracking-wide font-quicksand">Dashboard</p>
    </div>
  </div>
);
const SideBar = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className="flex h-full">
      <IconsSection />
      <TitlesSection />
    </div>
  );
};

export default SideBar;
