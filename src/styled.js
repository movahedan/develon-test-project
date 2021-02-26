import styled from 'styled-components';

export const S_Layout = styled.div.attrs(() => ({
  className: 'h-full flex flex-col md:flex-row text-white',
}))``;

export const S_MainContent = styled.main.attrs(() => ({
  className: 'max-h-screen flex-1 p-6 lg:px-6 overflow-y-auto bg-primary',
}))``;
