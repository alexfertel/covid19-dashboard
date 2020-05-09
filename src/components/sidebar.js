import React, { useState } from 'react';
import { Link } from 'gatsby';
import { LogoIcon, DashboardIcon } from '../global/icons';

const IconsSection = () => (
  <div className="flex flex-col items-center max-w-sm px-4 py-4 bg-cool-4 text-cool-2">
    <Link to="/">
      <LogoIcon className="w-8 h-8" />
    </Link>
  </div>
);

const TitlesSection = () => (
  <div className="w-full py-5 pl-4 bg-gray-300 opacity-50 text-cool-5">
    <div className="flex items-center pt-1 pl-2">
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
