import companyLogo from '../assets/aace.svg';
import preview1 from '../assets/preview_1.png'
import preview2 from '../assets/preview_2.png'
import preview3 from '../assets/preview_3.png'
import preview4 from '../assets/preview_4.png'

const Portafolio = () => {
  return (
    <section className='section'>
      <div className="columns  mb-6"> 
        <div className="column"></div>
        <div className='column is-three-fifths'><img className='box' src={preview1}/></div>
       
      </div>
      <div className="columns px-6 mb-6"> 
        <div className='column is-three-fifths'> <img className='box' src={preview2}/></div>
        <div className="column"></div>
      </div>

      <div className="columns  px-6 mb-6"> 
        <div className="column"></div>
        <div className='column is-three-fifths'><img className='box' src={preview3}/></div>
       
      </div>
      <div className="columns px-6 mb-6"> 
        <div className='column is-three-fifths'> <img className='box' src={preview4}/></div>
        <div className="column"></div>
      </div>
      
      <button className='button is-medium is-primary'> Enter </button>
      
  </section>
  )
}

export default Portafolio