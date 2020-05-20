import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import { useLocation } from "@reach/router"
import { LogoIcon, DashboardIcon, GitHubIcon, WorldIcon } from '../global/icons';

const tabs = [
  {
    title: 'Index',
    icon: <DashboardIcon className="w-6 h-6 text-blue-3" />,
    path: '/',
    links: [
      { title: 'Button component', path: '/button' },
      { title: 'Typograhy component', path: '/typography' },
      { title: 'Loader component', path: '/loader' },
      { title: 'Graph component', path: '/graph' },
    ],
  },
  {
    title: 'Map',
    icon: <WorldIcon className="w-8 h-8 text-blue-3" />,
    path: '/map',
    links: [
      { title: 'Casos activos', path: '/button' },
      { title: 'Fallecidos', path: '/typography' },
      { title: 'Lorem ipsum', path: '/loader' },
      { title: 'Dolor sit', path: '/graph' },
    ],
  },
  {
    title: 'Graph',
    icon: <WorldIcon className="w-8 h-8 text-blue-3" />,
    path: '/graphs',
    links: [
      { title: 'Lorem ipsum', path: '/button' },
      { title: 'Dolor sit amet', path: '/typography' },
      { title: 'Consectetur', path: '/loader' },
    ],
  },
];

const IconsSection = ({ tabIndex, setTabIndex }) => {
  return (
    <div className="flex flex-col w-32 bg-white rounded-2xl text-cool-2">
      <div className="flex flex-col items-center h-full px-4 py-4 mr-12 justify-evenly">
        <Link to="/">
          <LogoIcon className="w-8 h-8 text-blue-3" />
        </Link>
        <div className="flex flex-col items-center justify-center h-full">
          {tabs.map(({ title, icon, path }) => (
            <span
              key={title}
              className="flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-gray-900"
            >
              {icon}
            </span>
          ))}
        </div>
        <a href="https://github.com/Daher91/covid19-dashboard" rel="noopener noreferrer" target="_blank">
          <GitHubIcon className="w-8 h-8 text-blue-3" />
        </a>
      </div>
    </div>
  );
};

const TitlesSection = ({ tab }) => {
  return (
    <div className="w-full py-5 pl-4 -ml-12 text-white bg-blue-1 rounded-l-2xl">
      <div className="flex items-center pt-1 pl-12">
        <DashboardIcon className="w-4 h-4 stroke-2" />
        <p className="ml-4 text-sm font-medium tracking-wide font-quicksand">Dashboard</p>
      </div>
    </div>
  );
};

const computeNavigation = tab => link => Router.push(`${tab.path}${link.path}`);
const computePaths = pathname => pathname.slice(1, pathname.lastIndexOf('/')).split('/')

const SideBar = () => {
  const { pathname } = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  const tab = tabs[tabIndex];
  console.log(tab)
  const [linkIndex, setLinkIndex] = useState(0);
  const currentLink = tab.links[linkIndex];
  
  useEffect(() => {
    const [iconPath, linkPath] = computePaths(pathname);
    console.log(iconPath)
    console.log(linkPath)
    if (iconPath && linkPath){
      const index = tabs.findIndex(t => t.path.slice(1) === iconPath)
      if (index !== tabIndex) setTabIndex(index)
      if (linkPath) setLinkIndex(tabs[index].links.findIndex(t => t.path.slice(1) === iconPath))
    }
  }, [pathname]);

  
  useEffect(() => {
    computeNavigation(tab);
  }, [tabIndex]);

  return (
    <div className="flex h-full">
      <IconsSection tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <TitlesSection linkIndex={linkIndex} setLinkIndex={setLinkIndex} />
    </div>
  );
};

export default SideBar;
