import { useState } from 'react'
import './App.css'
import Florida from '../pages/Florida'
import NewJersey from '../pages/NewJersey'
import NorthCarolina from '../pages/NorthCarolina'
import Virginia from '../pages/Virginia'

import { Route, Routes } from 'react-router-dom'
import States from '../components/States'


function App() {



  return (
    <div className="App">
      <States></States>



      <Routes>
        <Route exact path='/' element={<Florida />}></Route>
        <Route exact path='/Virginia' element={<Virginia />}></Route>
        <Route exact path='/NewJersey' element={<NewJersey />}></Route>
        <Route exact path='/NorthCarolina' element={<NorthCarolina />}></Route>
      </Routes >


    </div >
  )
}

export default App
