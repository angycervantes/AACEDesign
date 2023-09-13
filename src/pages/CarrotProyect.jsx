import imgCarrot1 from '../assets/img_portafolio/Carrot/imgCarrot1.png'
import imgCarrot2 from '../assets/img_portafolio/Carrot/imgCarrot2.png'
import imgCarrot3 from '../assets/img_portafolio/Carrot/imgCarrot3.png'
import imgCarrot4 from '../assets/img_portafolio/Carrot/imgCarrot4.png'
import imgCarrot5 from '../assets/img_portafolio/Carrot/imgCarrot5.png'

const CarrotProyect = () => {
  return ( 
      <>
          <section className='home'>
              <div className='rombo4 atras'></div>

              <div className='columns is-gapless is-vcentered'>
                  <div className='column is-half ml-6 has-text-justified container'>
                      <h1 className="title is-2 is-uppercase">Admin System</h1>
                      <p className="is-size-3"> Socios Arrenda</p>
                      <p className="is-size-5"> El sitio web se diseñó para destacar los beneficios de la asociación,
                          presentar de manera clara y convincente los servicios adicionales y brindar
                          a los brokers una plataforma fácil de usar para realizar referencias. Con este enfoque,
                          buscamos establecer relaciones sólidas con los brokers, generar una red de socios comerciales
                          confiables y fortalecer nuestra posición en el mercado.</p>
                  </div>
                  <div className=''>
                      <img className='bgimag' src={imgCarrot1} />
                  </div>
              </div>

          </section>
          <div className='has-text-centered' g-6>
              <div className=''>
                  <img className='shadow' src={imgCarrot2} />
              </div>
              <div className=''>
                  <img className='shadow' src={imgCarrot3} />
              </div>
          </div>
          <section className='has-background-light p-6'>
              <div className='columns is-gapless'>
                  <div className='colum is-three-quarters'>
                      <img src={imgCarrot4} />
                  </div>
                  <div className='column mx-6'>
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

export default CarrotProyect