import '../src/app.scss'
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
    
    <Header />
    
    <Home />
    <AboutMe />
    {/* <SingleProyect /> */}
    {/* <CarrotProyect /> */}
    
    <Portafolio />


    </>
  )
}

export default App
