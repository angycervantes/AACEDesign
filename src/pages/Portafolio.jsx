import companyLogo from '../assets/Logo/aace.svg';
import preview1 from '../assets/img_portafolio/Previews/preview_1.png'
import preview2 from '../assets/img_portafolio/Previews/preview_2.png'
import preview3 from '../assets/img_portafolio/Previews/preview_3.png'
import preview4 from '../assets/img_portafolio/Previews/preview_4.png'

const Portafolio = () => {
  return (
    <section className='section'>
      
      
      <div className="columns  px-6 mb-6">
        <div className="column"></div>
        <div className='column is-three-fifths'><img className='shadow' src={preview1} /></div>
      </div>
      
      <div className="columns px-6 mb-6">
        <div className='column is-three-fifths'> <img className='shadow' src={preview2} /></div>
        <div className="column"></div>
      </div>

      <div className="columns  px-6 mb-6">
        <div className="column"></div>
        <div className='column is-three-fifths'><img className='shadow' src={preview3} /></div>
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