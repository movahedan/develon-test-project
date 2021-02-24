import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';
import ProgressiveImage from 'react-progressive-image';
import classnames from 'classnames';

import { categoriesQueryConfigs, categoriesSelectors } from 'redux-store';
import { Loading } from 'components';
import { chunkArray } from 'utils';

import { LoadMore } from './LoadMore';

import './style.css';

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
      <h1 className="text-4xl font-bold mb-4">
        Images in <span className="capitalize">{category.name}</span> category
      </h1>

      {chunkArray(images, 10).map((chunk, idx) => (
        <div
          key={idx}
          className="grid-container md:max-h-screen overflow-hidden mb-2"
        >
          {chunk.map((image, index) => (
            <div
              key={`${image.id} ${index}`}
              className={`grid-picture-${
                index + 1
              } sm:mb-4 md:mb-0 rounded-md border-2 border-gray-light hover:border-secondary-light`}
            >
              <ProgressiveImage
                delay={500}
                src={image.url}
                placeholder="/svg/loading.svg"
              >
                {(src, loading) => (
                  <img
                    src={src}
                    alt={image.url}
                    className={classnames(
                      'w-full h-full max-h-96',
                      loading ? 'object-contain' : 'object-cover'
                    )}
                  />
                )}
              </ProgressiveImage>
            </div>
          ))}
        </div>
      ))}

      <LoadMore
        loading={isPending}
        onClick={() => !isPending && setPage((page) => page + 1)}
      />
    </div>
  );
};

export default CategoryContainer;
