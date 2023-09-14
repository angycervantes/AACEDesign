import companyLogo from '../assets/Logo/aace.svg';
import inpersonaPreview from '../assets/img_portafolio/Previews/preview_1.png'
import sociosPreview from '../assets/img_portafolio/Previews/preview_2.png'
import carrotPreview from '../assets/img_portafolio/Previews/preview_3.png'
import preview4 from '../assets/img_portafolio/Previews/preview_4.png'
import { Link } from 'react-router-dom';

const Portafolio = () => {
  return (
    <section className='container'>
      
      <div className="columns  px-6 mb-6">
        <div className="column"></div>
        <Link to='/carrot' className='column is-three-fifths'><img className='shadow' src={carrotPreview} /></Link>
      </div>
      
      <div className="columns px-6 mb-6">
        <Link to='/sociosA' className='column is-three-fifths'> <img className='shadow' src={sociosPreview} /></Link>
        <div className="column"></div>
      </div>

      <div className="columns  px-6 mb-6">
        <div className="column"></div>
        <Link to='/inpersona' className='column is-three-fifths'><img className='shadow' src={inpersonaPreview} /></Link>
      </div>

      <div className="columns px-6 mb-6">
        <div className='column is-three-fifths'> <img className='shadow' src={preview4} /></div>
        <div className="column"></div>
      </div>

      <button className='button is-medium is-primary'> Enter </button>

    </section>
  )
}

export default Portafolio