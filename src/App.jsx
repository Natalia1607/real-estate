import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, MainContainer, RegisterContainer, SignInContainer } from './components';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/*' element={<MainContainer />}/>
          <Route path='/register' element={<RegisterContainer />}/>
          <Route path='/sign-in' element={<SignInContainer />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
