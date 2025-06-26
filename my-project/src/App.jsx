import React, { useState } from 'react';
import Sidebar from './component/navbar';
import Searchbar from './component/top';
import Main from './component/main';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed top-0 left-0 h-full z-20">
        <Sidebar />
      </div>

      <div className="flex-1 ml-16 flex flex-col">
        <div className="sticky top-0 bg-white z-10 px-4 py-3">
          <Searchbar search={search} setSearch={setSearch} />
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <Main search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
