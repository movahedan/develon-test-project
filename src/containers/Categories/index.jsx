import React from 'react';

import { S_Categories, S_Title } from './styled';

const CategoriesContainer = () => {
  return (
    <div className="w-full">
      <S_Title>Categories</S_Title>

      <S_Categories />
    </div>
  );
};

export default CategoriesContainer;
