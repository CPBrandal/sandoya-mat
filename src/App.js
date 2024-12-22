import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';  // or BrowserRouter
import Navigation from './Navigation';
import Footer from './component/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <BrowserRouter>
        <Navigation />
        <main style={{ flex: 1 }}>
          
        </main>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;