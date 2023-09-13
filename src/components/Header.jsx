
import AACELogo from '../assets/Logo/AACE_isotipo.svg';


const Header = () => {
  return (
  
   <nav className='navbar has-shadow is-white'>
    <div className='navbar-brand'>
      <a className='navbar-item'>
        <img src={AACELogo} alt='site logo' style={{maxHeight: '48px'}} className='py-2 px-2'/>
      </a>
      <a className='navbar-burger'>
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>
    <div className='navbar-menu' id = 'nav-links'>
      <div className="navbar-end">
        <div className="navbar-item">AboutMe</div>
        <div className="navbar-item">Portafolio</div>
      </div>
    </div>
   </nav>
  )
}

export default Header