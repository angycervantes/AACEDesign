import '../src/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portafolio from './pages/Portafolio'

import SociosArrenda from './pages/portafolio/SociosArrenda'
import CarrotProyect from './pages/portafolio/CarrotProyect'
import Inpersona from './pages/portafolio/Inpersona'

import ScrollToTop from './pages/ScrollToTop'


function App() {

  return (
    <>
      <Router>
      
        <ScrollToTop />
        <Header />
        <div>
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/aboutMe' element={<AboutMe />} />
            <Route path='/portafolio' element= {<Portafolio />} />
            <Route path='/carrot' element={<CarrotProyect />} />
            <Route path='/inpersona' element={<Inpersona />} />
            <Route path='/sociosA' element= {<SociosArrenda />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
