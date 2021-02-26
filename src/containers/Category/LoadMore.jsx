import React from 'react';

import { Loading } from 'components';

import { S_LoadMore } from './styled';

export const LoadMore = ({ loading, onClick }) => {
  return (
    <div onClick={onClick}>
      {loading ? <Loading /> : <S_LoadMore>Load More</S_LoadMore>}
    </div>
  );
};
