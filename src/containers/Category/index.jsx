import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';

import { categoriesQueryConfigs, categoriesSelectors } from 'redux-store';
import { Loading } from 'components';
import { chunkArray } from 'utils';

import { Image } from './Image';
import { LoadMore } from './LoadMore';
import { S_GridItem, S_GridSystem, S_Title } from './styled';

const CategoryContainer = () => {
  const {
    params: { id: categoryId },
  } = useRouteMatch();

  const [page, setPage] = useState(1);
  const [{ isPending }] = useRequest(
    categoriesQueryConfigs.paginatedImagesByCategoryIdRequest({
      categoryId,
      page,
    })
  );
  const category = useSelector(categoriesSelectors.getCategory(categoryId));
  const images = useSelector(
    categoriesSelectors.getImagesOfCategories(categoryId)
  );

  if (!category) return <Loading />;
  return (
    <div className="w-full flex flex-col pb-6">
      <S_Title>
        Images in <span className="capitalize">{category.name}</span> category
      </S_Title>

      {chunkArray(images, 10).map((chunk, idx) => (
        <S_GridSystem key={idx}>
          {chunk.map((image, index) => (
            <S_GridItem index={index} key={`${image.id} ${index}`}>
              <Image image={image} />
            </S_GridItem>
          ))}
        </S_GridSystem>
      ))}

      <LoadMore
        loading={isPending}
        onClick={() => !isPending && setPage((page) => page + 1)}
      />
    </div>
  );
};

export default CategoryContainer;
