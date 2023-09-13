import '../src/app.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portafolio from './pages/Portafolio'
import Proyecto from './components/Proyecto'
import SingleProyect from './pages/SingleProyect'
import CarrotProyect from './pages/CarrotProyect'
import Header from './components/Header'


function App() {

  return (
    <>
      <Router>
        <Header />
        <div className='container'>
        <Routes>
            <Route  path='/' element={<Home />} />
            <Route  path='/aboutMe' element={<AboutMe />} />
            <Route path='/portafolio' element={<Portafolio />} />
            <Route path='/proyecto1' element={<SingleProyect />} />
            <Route path='/proyecto2' element={<CarrotProyect />} />

          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
