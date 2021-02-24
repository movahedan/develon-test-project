import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from 'utils';

import { Categories } from '../Categories';

export const Navigation = () => {
  return (
    <>
      <NavLink
        to={routes.categories.path()}
        className="hidden md:block text-2xl lg:text-3xl mt-6 mx-4"
      >
        Categories
      </NavLink>
      <Categories className="flex flex-row md:flex-col md:max-w-sm overflow-auto mt-3 md:mx-4 items-center md:items-stretch" />
    </>
  );
};
