import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import { categoriesSelectors } from 'redux-store';
import { routes } from 'utils';

const CategoryItem = ({ className, ...props }) => {
  const { id, name } = props;

  return (
    <NavLink
      to={routes.category.path(id)}
      activeClassName="bg-secondary"
      className={classnames(
        'cursor-pointer bg-primary-light rounded px-4 lg:px-6 mx-2 md:mx-0 md:my-2',
        className
      )}
    >
      <span className="text-xl lg:text-2xl py-2 inline-block capitalize">
        {name}
      </span>
    </NavLink>
  );
};

export const Categories = ({ itemClassName, className }) => {
  const categories = useSelector(categoriesSelectors.getCategories);

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
