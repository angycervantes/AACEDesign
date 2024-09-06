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
import AdelantaApp from './pages/portafolio/AdelantaApp'
import Kyc from './pages/portafolio/Kyc'

import ScrollToTop from './pages/ScrollToTop'
import Tagtolls from './pages/portafolio/Tagtolls'


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
            <Route path='/kyc' element = {<Kyc />} />
            <Route path='/adelantaA' element = {<AdelantaApp />} />
            <Route path='/tagTolls' element = {<Tagtolls />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
