import styled from 'styled-components';

import { Categories } from 'components';

export const S_Categories = styled(Categories).attrs(() => ({
  className: 'w-full max-w-lg flex flex-row flex-wrap',
  itemClassName:
    'w-full md:w-1/3 h-24 flex items-center justify-center my-2 sm:mx-0 sm:mx-2 md:mx-3 border-2 border-white bg-transparent hover:bg-gray-light hover:text-primary',
}))``;

export const S_Title = styled.h3.attrs(() => ({
  className: 'text-2xl lg:text-3xl mb-6 ml-2',
}))``;
