
import AACELogo from '../assets/Logo/AACE_isotipo.svg'
import Animaciones from './Animaciones'

const Header = () => {

  return (

    <nav className='navbar is-fixed-top has-shadow is-white'>
      <div className='navbar-brand'>
        <a href='#meAbout' className='navbar-item'>
          <img src={AACELogo} alt='site logo' style={{ maxHeight: '56px' }} className='py-2 px-2' />
        </a>
        <a className='navbar-burger' onClick={Animaciones}>
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
  
      <div className='navbar-menu' id='nav-links'>
        <div className="navbar-end">
          <a href='/#meAbout' className="navbar-item">About Me</a>
          <a href='/#portafolio' className="navbar-item">Portafolio</a>
          <a href='https://www.linkedin.com/in/aacedesign/' target="_blank" className="navbar-item">LinkedIn</a>
        </div>
      </div>
    </nav>
  )
}

export default Header