import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Containers/Container_1/Home';
import Tise from './Containers/Container_2/Tise';

export default function App() {

  return (

    <>


      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Tise' element={<Tise />} />

      </Routes>


    </>
  )
}
