import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import MainContainer from './components/mainContainer/MainContainer';

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes>
            <Route path='/*' element={<MainContainer/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
