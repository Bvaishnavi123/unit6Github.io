import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const debounce = (fn,delay)=>{
    let timer
    return function(...args){
      if(timer) clearTimeout(timer)
      timer = setTimeout(()=>{
        fn(...args)
      },delay)
    }
  }

  const changeHandler = debounce((e)=>{
      console.log(e.target.value)
  },1000)

  return (
    <div className="App">
       <input type="text" onChange={changeHandler} />
    </div>
  )
}

export default App
