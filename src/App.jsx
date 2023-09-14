import '../src/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portafolio from './pages/Portafolio'
import SociosArrenda from './pages/portafolio/SociosArrenda'
import CarrotProyect from './pages/portafolio/CarrotProyect'
import Header from './components/Header'
import Inpersona from './pages/portafolio/Inpersona'


function App() {

  return (
    <>
      <Router>
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
      </Router>
    </>
  )
}

export default App
