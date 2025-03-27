import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/Home/Home'
import Services from './component/Services/Services'
import Testimonial from './component/Testimonial/Testimonial'
import Contact from './component/Contact/Contact'
import About from './component/About/About'
import Whatsapp from '../Whatsapp' 

const App = () => {
  return (
   
    <Router>
<Navbar />
<Whatsapp />
<Routes>
<Route path="/" element={ <Home/>} />
<Route path="/about" element={ <About/>} />
<Route path="/testimonial" element={ <Testimonial/>} />
<Route path="/contact" element={ <Contact/>} />
<Route path="/services" element={ <Services/>} />
</Routes>
    </Router>
  )
}

export default App