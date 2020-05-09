import React, { useState } from 'react';
import { Link } from 'gatsby';
import { LogoIcon, DashboardIcon } from '../global/icons';

const IconsSection = () => (
  <div className="flex flex-col w-32 bg-cool-4 text-cool-2">
    <div className="flex flex-col items-center h-full px-4 py-4 mr-12">
      <Link to="/">
        <LogoIcon className="w-8 h-8" />
      </Link>
    </div>
  </div>
);

const TitlesSection = () => (
  <div className="w-full py-5 pl-4 -ml-12 bg-gray-300 shadow-lg text-cool-5 rounded-l-2xl">
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
