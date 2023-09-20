import companyLogo from '../assets/Logo/aace.svg';
import inpersonaPreview from '../assets/img_portafolio/Previews/preview_1.png'
import sociosPreview from '../assets/img_portafolio/Previews/preview_2.png'
import carrotPreview from '../assets/img_portafolio/Previews/preview_3.png'
import preview4 from '../assets/img_portafolio/Previews/preview_4.png'
import { Link } from 'react-router-dom';

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h2 className='has-text-centered title mb-6'> PORTAFOLIO</h2>
       
      <div className="columns  px-6 desktop-mb-6">
        <div className="column"></div>
        <div className="column"></div>
        <Link to='/carrot' className='column is-two-fifths imgA'><img className='shadow' src={carrotPreview} /></Link>
        <div className="column"></div>
      </div>
      
      <div className="columns px-6 desktop-mb-6">
        <div className="column"></div>
        <Link to='/sociosA' className='column is-two-fifths imgA'> <img className='shadow' src={sociosPreview} /></Link>
        <div className="column"></div>
        <div className="column"></div>
      </div>

      <div className="columns  px-6 mb-6">
        <div className="column"></div>
        <div className="column"></div>
        <Link to='/inpersona' className='column is-two-fifths imgA'><img className='shadow' src={inpersonaPreview} /></Link>
        <div className="column"></div>
      </div>

      <div className="columns px-6 mb-6">
        <div className="column"></div>
        <Link to='/kyc' className='column is-two-fifths imgA'> <img className='shadow' src={preview4} /></Link>
        <div className="column"></div>
        <div className="column"></div>
      </div>
    </section>
  )
}

export default Portafolio