import React from 'react';

import { Navbar } from 'components';
import { Containers } from 'containers';

import './index.css';

function App() {
  return (
    <div className="h-full flex flex-col md:flex-row">
      <Navbar />
      <main className="flex-1 p-6 lg:px-6">
        <Containers />
      </main>
    </div>
  );
}

export default App;
