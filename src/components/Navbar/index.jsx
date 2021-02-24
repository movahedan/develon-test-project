import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { routes } from 'utils';

import { Navigation } from './Navigation';

export const Navbar = ({ className }) => {
  const loaction = useLocation();
  const isNavigationNeeded = loaction.pathname !== routes.categories.path();

  return (
    <nav
      className={classnames(
        'h-20 w-full md:h-full max-w-full flex flex-row md:flex-col bg-primary-dark text-white',
        !isNavigationNeeded ? 'md:w-auto' : 'md:w-64 lg:w-80',
        className
      )}
    >
      <Link
        to={routes.categories.path()}
        className={classnames(
          'flex items-center flex-none transition-transform duration-150',
          !isNavigationNeeded
            ? 'md:transform md:-rotate-90 md:my-auto'
            : 'w-auto'
        )}
      >
        <img alt="Loading..." src="/svg/loading.svg" className="w-16 h-16" />
        <h1 className="text-3xl lg:text-4xl">Develon</h1>
      </Link>

      <div
        className={classnames(
          'transition-transform duration-300 transform overflow-x-auto',
          isNavigationNeeded
            ? 'translate-y-0 translate-x-0'
            : '-translate-y-full md:translate-y-0 md:-translate-x-full'
        )}
      >
        <Navigation />
      </div>
    </nav>
  );
};
