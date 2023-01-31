import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header, MainContainer, RegisterContainer, SignInContainer } from './components';
import { Buy, Rent } from './page';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/*' element={<MainContainer />}/>
          <Route path='/register' element={<RegisterContainer />}/>
          <Route path='/sign-in' element={<SignInContainer />}/>
          <Route path='/rent' element={<Rent />}>
            <Route path='/rent/rent-daily' element={<Rent />}/>
            <Route path='/rent/rent-monthly' element={<Rent />}/>
            <Route path='/rent/rent-yearly' element={<Rent />}/>
            <Route path='/rent/rent-commercial' element={<Rent />}/>
          </Route>
          <Route path='/buy' element={<Buy />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
