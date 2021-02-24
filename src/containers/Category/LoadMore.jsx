import React from 'react';

import { Loading } from 'components';

export const LoadMore = ({ loading, onClick }) => {
  return (
    <div onClick={onClick}>
      {loading ? (
        <Loading />
      ) : (
        <span className="cursor-pointer inline-block text-lg text-secondary-light font-bold mt-4">
          Load More
        </span>
      )}
    </div>
  );
};
