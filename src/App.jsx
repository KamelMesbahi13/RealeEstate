import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import { Home, ContactUs, About, Services, Apartments, Up, Error, Footer } from './INDEX';

const App = () => {
  return (
    <>
      <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/apartments' element={<Apartments />} />
            <Route path='/about' element={<About />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='*' element={<Error />} />
          </Routes>
        <Up />
        <Footer />
      </div>
    </>
  )
}

export default App