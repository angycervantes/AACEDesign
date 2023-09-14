
import AACELogo from '../assets/Logo/AACE_isotipo.svg';
import { Link} from 'react-router-dom'

const Header = () => {
  return (
  
   <nav className='navbar has-shadow is-white'>
    <div className='navbar-brand'>
      <Link to='/' className='navbar-item'>
        <img src={AACELogo} alt='site logo' style={{maxHeight: '48px'}} className='py-2 px-2'/>
      </Link>
      <a className='navbar-burger'>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div className='navbar-menu' id = 'nav-links'>
      <div className="navbar-end">
        {/* <a href='meAbout' className="navbar-item">AboutMe</a> */}
        <Link to='/aboutMe' className="navbar-item">About Me</Link>
        <Link to='/portafolio' className="navbar-item">Portafolio</Link>
      </div>
    </div>
   </nav>
  )
}

export default Header