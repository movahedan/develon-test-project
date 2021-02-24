import { lazy } from 'react';

const HomeContainer = lazy(() => import('containers/Home'));
const CategoriesContainer = lazy(() => import('containers/Categories'));
const CategoryContainer = lazy(() => import('containers/Category'));

const routes = {
  home: {
    exact: true,
    path: () => '/',
    render: function HomaPage() {
      return <HomeContainer />;
    },
  },
  categories: {
    exact: true,
    path: () => '/categories',
    render: function CategoriesPage() {
      return <CategoriesContainer />;
    },
  },
  category: {
    path: (id = ':id') => `/categories/${id}`,
    render: function CategoryPage() {
      return <CategoryContainer />;
    },
  },
};

export { routes };
