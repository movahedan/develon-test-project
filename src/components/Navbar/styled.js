import styled from 'styled-components';
import classnames from 'classnames';

import { Categories } from 'components/Categories';

export const S_Nav = styled.nav.attrs(({ isMinimal }) => ({
  className: classnames(
    'h-16 w-full md:h-full max-w-full flex flex-row md:flex-col bg-primary-dark text-white transition-all duration-300',
    !isMinimal ? 'md:w-auto' : 'md:w-64 lg:w-80'
  ),
}))``;

export const S_NavNavigation = styled.div.attrs(({ isMinimal }) => ({
  className: classnames(
    'transition-transform duration-300 transform overflow-x-auto flex-1 flex items-center md:block',
    isMinimal
      ? 'translate-y-0 translate-x-0 '
      : '-translate-y-full md:translate-y-0 md:-translate-x-full w-0 h-0'
  ),
}))``;

export const S_Logo_Wrapper = styled.div.attrs(({ isMinimal }) => ({
  className: classnames('flex items-center', isMinimal && 'md:my-auto'),
}))``;

export const S_Logo = styled.img.attrs(({ isMinimal }) => ({
  alt: 'Develon',
  src: '/svg/loading.svg',
  className: classnames(
    'w-12 h-12 md:w-16 md:h-16 transition-all duration-150 transform hover:rotate-90',
    !isMinimal && 'md:-rotate-90'
  ),
}))``;

export const S_NavCategories = styled(Categories).attrs(() => ({
  className:
    'flex flex-row md:flex-col md:max-w-sm overflow-auto md:mt-3 md:mx-6 items-center md:items-stretch',
}))``;

export const S_WebsiteTitle = styled.h1.attrs(({ isMinimal }) => ({
  className: `text-2xl md:text-3xl lg:text-4xl ${
    isMinimal ? 'hidden md:block' : 'md:hidden'
  }`,
}))``;
