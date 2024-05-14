import React from 'react';
import Backhead from './Components/Backhead';
import Forehead from './Components/Forehead';

const App = () => {
  return (
    <div className=' relative w-full h-screen bg-zinc-800'>
      <Backhead />
      <Forehead />
    </div>
  )
}

export default App;
