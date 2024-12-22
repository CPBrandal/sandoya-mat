import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // or BrowserRouter
import MyApp from './MyApp';

function App() {
  return (
    <BrowserRouter>
      <MyApp />
    </BrowserRouter>
  );
}

export default App;