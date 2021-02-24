import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { routes } from 'utils';

import { Navigation } from './Navigation';

export const Navbar = ({ className }) => {
  const location = useLocation();
  const isMinimal = useMemo(
    () => location.pathname !== routes.categories.path(),
    [location]
  );

  return (
    <nav
      className={classnames(
        'h-16 w-full md:h-full max-w-full flex flex-row md:flex-col bg-primary-dark text-white transition-all duration-300',
        !isMinimal ? 'md:w-auto' : 'md:w-64 lg:w-80',
        className
      )}
    >
      <div
        className={classnames('flex items-center', isMinimal && 'md:my-auto')}
      >
        <Link
          to={routes.categories.path()}
          className={classnames(
            'flex-none flex items-center transition-all duration-150',
            !isMinimal && 'my-auto'
          )}
        >
          <img
            alt="Loading..."
            src="/svg/loading.svg"
            className={classnames(
              'w-12 h-12 md:w-16 md:h-16 transition-all duration-150 transform hover:rotate-90',
              !isMinimal && 'md:-rotate-90'
            )}
          />
          <h1
            className={`text-2xl md:text-3xl lg:text-4xl ${
              isMinimal ? 'hidden md:block' : 'md:hidden'
            }`}
          >
            Develon
          </h1>
        </Link>
      </div>

      <div
        className={classnames(
          'transition-transform duration-300 transform overflow-x-auto flex-1 flex items-center md:block',
          isMinimal
            ? 'translate-y-0 translate-x-0 '
            : '-translate-y-full md:translate-y-0 md:-translate-x-full w-0 h-0'
        )}
      >
        <Navigation />
      </div>
    </nav>
  );
};
