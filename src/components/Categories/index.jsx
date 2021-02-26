import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';

import { categoriesQueryConfigs, categoriesSelectors } from 'redux-store';
import { Loading } from 'components';
import { routes } from 'utils';

import { S_CategoryItem } from './styled';

const CategoryItem = ({ className, ...props }) => {
  const { id, name } = props;

  return (
    <S_CategoryItem
      as={NavLink}
      to={routes.category.path(id)}
      activeClassName="bg-secondary"
      className={className}
    >
      <span className="text-xl lg:text-2xl capitalize">{name}</span>
    </S_CategoryItem>
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
