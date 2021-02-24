import React from 'react';

import { Categories } from 'components/Categories';

const CategoriesContainer = () => (
  <div className="w-full">
    <h3 className="text-2xl lg:text-3xl mb-6">Categories</h3>

    <Categories
      className="w-full max-w-lg flex flex-col"
      itemClassName="my-2 sm:mx-0 sm:bg-gray-dark"
    />
  </div>
);

export default CategoriesContainer;
