const emptyArray = [];

export const getCategories = (state) => {
  return state.entities.categories || emptyArray;
};

export const getCategory = (categoryId) => (state) => {
  return (state.entities.categories || emptyArray).find((category) => {
    return category.id === Number(categoryId);
  });
};

export const getImagesOfCategories = (categoryId) => (state) => {
  return (state.entities.imagesByCategoryId || {})[categoryId] || emptyArray;
};
