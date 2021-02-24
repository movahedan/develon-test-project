import React from 'react';
import { useRequest } from 'redux-query-react';
import { NavLink } from 'react-router-dom';

import { categoriesQueryConfigs } from 'redux-store';
import { routes } from 'utils';

import { Loading } from '../Loading';
import { Categories } from '../Categories';

export const Navigation = () => {
  const [{ isPending, isFinished }] = useRequest(
    categoriesQueryConfigs.categoriesRequest()
  );
  const loading = isPending || !isFinished;

  return (
    <>
      <NavLink
        to={routes.categories.path()}
        className="hidden md:block text-2xl lg:text-3xl mt-6 mx-4"
      >
        Categories
      </NavLink>
      {loading ? (
        <Loading className="h-20 mx-auto" />
      ) : (
        <Categories className="flex flex-row md:flex-col md:max-w-sm overflow-auto mt-3 ml-4 md:mr-4 items-center md:items-stretch" />
      )}
    </>
  );
};
