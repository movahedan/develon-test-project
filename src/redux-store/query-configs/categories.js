import qs from 'query-string';

export const categoriesRequest = () => {
  const endpointUrl = `${process.env.REACT_APP_API_BASE_URL}/categories`;

  return {
    url: endpointUrl,
    transform: (body) => ({
      categories: body,
    }),
    update: {
      categories: (_, next) => next,
    },
  };
};

export const paginatedImagesByCategoryIdRequest = ({
  categoryId: category_ids,
  page = 1,
  limit = 10,
}) => {
  if (typeof category_ids === 'undefined') {
    throw Error('No category ID is provided');
  }

  const endpointUrl = `${process.env.REACT_APP_API_BASE_URL}/images/search`;
  const params = {
    limit,
    page,
    category_ids,
  };

  return {
    url: `${endpointUrl}?${qs.stringify(params)}`,
    transform: (body) => ({
      imagesByCategoryId: {
        [category_ids]: body,
      },
    }),
    update: {
      imagesByCategoryId: (prev = {}, next) => {
        return {
          ...prev,
          [category_ids]: [
            ...(prev[category_ids] || []),
            ...next[category_ids],
          ],
        };
      },
    },
  };
};
