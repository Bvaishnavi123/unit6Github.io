import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { SignUp } from './Components/SignUp'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/user/create" element={<SignUp/>}></Route>
    </Routes>
    </>
  )
}

export default App
