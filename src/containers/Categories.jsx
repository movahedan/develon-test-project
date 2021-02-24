import React from 'react';

import { Categories } from 'components/Categories';

const CategoriesContainer = () => {
  return (
    <div className="w-full">
      <h3 className="text-2xl lg:text-3xl mb-6 ml-2">Categories</h3>

      <Categories
        className="w-full max-w-lg flex flex-row flex-wrap"
        itemClassName="w-full md:w-1/3 h-24 flex items-center justify-center my-2 sm:mx-0 sm:mx-2 md:mx-3 border-2 border-white bg-transparent hover:bg-gray-light hover:text-primary"
      />
    </div>
  );
};

export default CategoriesContainer;
