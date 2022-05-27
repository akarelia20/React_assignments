import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import DisplayPara from './components/DisplayPara'

function App () {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:firstPara' element={<DisplayPara />} />
          <Route
            path='/:firstPara/:color/:background'
            element={<DisplayPara />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
