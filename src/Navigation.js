// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Liv } from './Liv';
import { Meny } from './Meny';

function Navigation() {
  return (
    <>
      <Routes>
        {/* "Home" at the root path */}
        <Route path="/" element={<Home />} />

        {/* "Liv" page at /liv */}
        <Route path="/liv" element={<Liv />} />

        <Route path="/meny" element={<Meny />} />
      </Routes>
    </>

  );
}

export default Navigation;


