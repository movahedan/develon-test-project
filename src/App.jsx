import React from 'react';

import { Navbar } from 'components';
import { Containers } from 'containers';

import './index.css';

function App() {
  return (
    <div className="h-full flex flex-col md:flex-row text-white">
      <Navbar />
      <main className="max-h-screen flex-1 p-6 lg:px-6 overflow-y-auto bg-primary">
        <Containers />
      </main>
    </div>
  );
}

export default App;
