import React from 'react';

import { Navbar } from 'components';
import { Containers } from 'containers';

import { S_Layout, S_MainContent } from 'styled';
import './index.css';

function App() {
  return (
    <S_Layout>
      <Navbar />
      <S_MainContent>
        <Containers />
      </S_MainContent>
    </S_Layout>
  );
}

export default App;
