
import AACELogo from '../assets/Logo/aace.svg';
import AboutMe from './AboutMe';
import Portafolio from './Portafolio';

const Home = () => {
  return (
    <>
      {/* <section className='section home' id='holi'>
        <div className='container has-text-centered hommie'>
          <div className='child'>
            <img className='is-inline-block' src={AACELogo} style={{ maxHeight: '120px' }} />
            <h1 className="is-size-2 is-text-bold"> Holi mundo </h1>

            <input class="input " type="text" placeholder="Ingresa tu nombre"></input>
            <button className='button is-medium is-primary'> Enter </button>
          </div>
        </div>
      </section> */}
      <AboutMe />
      <Portafolio />
    </>
  )
}

export default Home