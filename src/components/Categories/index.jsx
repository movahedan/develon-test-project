import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';
import classnames from 'classnames';

import { categoriesQueryConfigs, categoriesSelectors } from 'redux-store';
import { Loading } from 'components';
import { routes } from 'utils';

const CategoryItem = ({ className, ...props }) => {
  const { id, name } = props;

  return (
    <NavLink
      to={routes.category.path(id)}
      activeClassName="bg-secondary"
      className={classnames(
        'cursor-pointer rounded px-4 py-2 lg:px-6 mx-2 md:mx-0 md:my-2',

        className
      )}
    >
      <span className="text-xl lg:text-2xl capitalize">{name}</span>
    </NavLink>
  );
};

export const Categories = ({ itemClassName, className }) => {
  const [{ isPending }] = useRequest(
    categoriesQueryConfigs.categoriesRequest()
  );

  const categories = useSelector(categoriesSelectors.getCategories);

  if (isPending) return <Loading />;
  return (
    <ol className={className}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          className={itemClassName}
        />
      ))}
    </ol>
  );
};
