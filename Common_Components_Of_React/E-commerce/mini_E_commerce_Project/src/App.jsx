import { useState } from 'react'

import './App.css'
import {Route,Routes} from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { HomePage } from './Components/Pages/HomePage'
import { Shop } from './Components/Pages/Shop'
import { SingleProduct } from './Components/Pages/SingleProduct'


function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path='/allCollection' element={<Shop/>}></Route>
      <Route path='/allCollection/:id' element={<SingleProduct/>}></Route>
     </Routes>
  
    </>
  )
}

export default App
