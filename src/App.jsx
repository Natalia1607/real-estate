import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, MainContainer, RegisterContainer } from './components';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/*' element={<MainContainer />}/>
          <Route path='/register' element={<RegisterContainer />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
