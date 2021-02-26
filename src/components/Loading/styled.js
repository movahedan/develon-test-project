import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const S_Loading = styled.img.attrs(() => ({
  alt: 'Loading...',
  src: '/svg/loading.svg',
  className: 'react-loading w-16 h-16 pointer-events-none',
}))`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 2s linear;
  }
`;
