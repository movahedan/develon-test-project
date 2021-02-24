import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';

import { categoriesSelectors, categoriesQueryConfigs } from 'redux-store';
import { Loading } from './Loading';

const ImageList = ({ categoryId }) => {
  const [page, setPage] = useState(1);
  const [{ isPending, isFinished }] = useRequest(
    categoriesQueryConfigs.paginatedImagesByCategoryIdRequest({
      categoryId,
      page,
    })
  );
  const images = useSelector(
    categoriesSelectors.getImagesOfCategories(categoryId)
  );

  if (images?.length === 0 && !isFinished) {
    return <Loading />;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {images.map((image, index) => (
        <span key={image.id + index} style={{ marginRight: 2 }}>
          {image.id}
        </span>
      ))}
      <div onClick={() => !isPending && setPage((page) => page + 1)}>
        {isPending ? <Loading /> : <span>Load More</span>}
      </div>
    </div>
  );
};

const CategoryItem = ({ className, ...props }) => {
  const { id, name } = props;
  const [isShowImages, setIsShowImages] = useState(false);

  return (
    <>
      <li
        style={{ marginTop: 16 }}
        className={className}
        onClick={() => setIsShowImages((prev) => !prev)}
      >
        <span>{name}</span>
      </li>
      {isShowImages && <ImageList categoryId={id} />}
    </>
  );
};

export const Categories = () => {
  const [{ isPending, isFinished }] = useRequest(
    categoriesQueryConfigs.categoriesRequest()
  );
  const categories = useSelector(categoriesSelectors.getCategories);

  if (isPending || (categories.length === 0 && !isFinished)) {
    return <Loading />;
  }
  return (
    <ol>
      {categories.map((category) => (
        <CategoryItem key={category.id} id={category.id} name={category.name} />
      ))}
    </ol>
  );
};
