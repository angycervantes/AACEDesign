import socios_1 from '../../assets/img_portafolio/SociosArrenda/socios_arrenda_1.png'
import socios_2 from '../../assets/img_portafolio/SociosArrenda/socios_arrenda_2.png'
import socios_3 from '../../assets/img_portafolio/SociosArrenda/socios_arrenda_3.png'
import socios_4 from '../../assets/img_portafolio/SociosArrenda/socios_arrenda_4.png'


const SociosArrenda = () => {
  return (
    <>
      <section className='home'>
        {/* <div className='rombo3 atras'></div> */}

        <div className='columns is-gapless is-vcentered'>
          <div className='column ml-6 has-text-justified container'>
            <h1 className="title is-2 is-uppercase"> Sitio web</h1>
            <p className="is-size-3"> Socios Arrenda</p>
            <p className="is-size-5"> El sitio web se diseñó para destacar los beneficios de la asociación,
              presentar de manera clara y convincente los servicios adicionales y brindar
              a los brokers una plataforma fácil de usar para realizar referencias. Con este enfoque,
              buscamos establecer relaciones sólidas con los brokers, generar una red de socios comerciales
              confiables y fortalecer nuestra posición en el mercado.</p>
          </div>
          <div className='colum is-half'>
            <img className='loquetuquieras' src={socios_1} />
          </div>
        </div>
      </section>
      <div className='columns'>
        <div className='column'></div>
        <div className='column is-two-fifths'>
          <img src={socios_2} />
        </div>
        <div className='column is-one-fifth'>
          <img src={socios_3} />
        </div>
        <div className='column'></div>
      </div>
      <section className='has-background-light p-6'>
        <div className='columns is-gapless'>
          
          <div className='colum is-three-quarters'>
            <img src={socios_4} />
          </div>
          <div className='column is-one-quarter is-end mx-6'>
            <p className="is-size-3"> Socios Arrenda</p>
            <ul>
              <li>Benchmarking</li>
              <li>User research</li>
              <li>Wireframing </li>
              <li>UI design</li>
              <li>Handoff to the development team </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default SociosArrenda
