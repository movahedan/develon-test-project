import styled from 'styled-components';
import classnames from 'classnames';

export const S_Image = styled.img.attrs(({ loading }) => ({
  className: classnames(
    'w-full h-full max-h-96',
    loading ? 'object-contain' : 'object-cover'
  ),
}))``;

export const S_GridSystem = styled.div.attrs(() => ({
  className: 'md:max-h-screen overflow-hidden mb-2',
}))`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 8px 8px;
  }

  .grid-picture-1 {
    grid-area: 2 / 3 / 4 / 4;
  }
  .grid-picture-2 {
    grid-area: 1 / 1 / 3 / 3;
  }
  .grid-picture-3 {
    grid-area: 1 / 4 / 3 / 5;
  }
  .grid-picture-4 {
    grid-area: 1 / 3 / 2 / 4;
  }
  .grid-picture-5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .grid-picture-6 {
    grid-area: 3 / 2 / 4 / 3;
  }
  .grid-picture-7 {
    grid-area: 3 / 4 / 4 / 5;
  }
  .grid-picture-8 {
    grid-area: 4 / 1 / 5 / 2;
  }
  .grid-picture-9 {
    grid-area: 4 / 2 / 5 / 4;
  }
  .grid-picture-10 {
    grid-area: 4 / 5 / 5 / 4;
  }
`;

export const S_GridItem = styled.div.attrs(({ index }) => ({
  className: `grid-picture-${
    index + 1
  } sm:mb-4 md:mb-0 rounded-md border-2 border-gray-light hover:border-secondary-light`,
}))``;

export const S_LoadMore = styled.span.attrs(() => ({
  classname:
    'cursor-pointer inline-block text-lg text-secondary-light font-bold mt-4',
}))``;

export const S_Title = styled.h2.attrs(() => ({
  className: 'text-4xl font-bold mb-8',
}))``;
