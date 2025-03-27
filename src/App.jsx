import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home/Home'

const App = () => {
  return (
   
    <Router>
<Navbar />
<Routes>
<Route path="/" element={ <Home/>} />
</Routes>
    </Router>
  )
}

export default App