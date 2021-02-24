const emptyArray = [];

export const getCategories = (state) => {
  return state.entities.categories || emptyArray;
};

export const getImagesOfCategories = (categoryId) => (state) => {
  return (state.entities.imagesByCategoryId || {})[categoryId] || emptyArray;
};
