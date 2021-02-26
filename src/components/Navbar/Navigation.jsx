import React from 'react';
import { NavLink } from 'react-router-dom';

import { routes } from 'utils';

import { S_NavCategories } from './styled';

export const Navigation = () => {
  return (
    <>
      <NavLink
        to={routes.categories.path()}
        className="hidden md:block text-2xl lg:text-3xl mt-6 mx-6"
      >
        Categories
      </NavLink>
      <S_NavCategories />
    </>
  );
};
