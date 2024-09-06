import socios_1 from '../../assets/img_portafolio/SociosArrenda/socios_arrenda_1.png'
import SociosImgBench from '../../assets/img_portafolio/SociosArrenda/SociosImgBench.png'
import SociosImgPersona from '../../assets/img_portafolio/SociosArrenda/SociosImgPersona.png'
import SociosImgIdear from '../../assets/img_portafolio/SociosArrenda/SociosImgIdear.png'


import figma from '../../assets/logoRef/figma.png'
import miro from '../../assets/logoRef/miro.png'
import clarity from '../../assets/logoRef/clarity.png'
import hubspot from '../../assets/logoRef/Hubspot.png'

import empatizar from '../../assets/img_portafolio/Carrot/secciones/empatizar.svg'
import definirA from '../../assets/img_portafolio/Carrot/secciones/definirA.svg'
import idear from '../../assets/img_portafolio/Carrot/secciones/idear.svg'
import prototipar from '../../assets/img_portafolio/Carrot/secciones/prototipar.svg'

const SociosArrenda = () => {
  return (
    <>

      <section className='main hero is-fullwidth-with-navbar'>
        <div className='hero-body'>
          <div className='columns is-gapless is-vcentered'>
            <div className='column is-two-fifths has-text-justified container'>
              <div className='main-content'>
                <h1 className='title is-2 is-uppercase has-text-weight-semibold'>Sitio web</h1>
                <h2 className='title is-3 is-uppercase has-text-weight-light'>Socios Arrenda</h2>

                <p className='is-size-5-desktop'> El sitio web se diseñó para destacar los beneficios 
                de la asociación, presentar de manera clara y convincente los servicios adicionales y 
                brindar a los brokers una plataforma fácil de usar para realizar referencias. </p>
                <div className='mt-4'>
                  <img className='mr-3' src={figma} />
                  <img className='mr-3' src={miro} />
                  <img className='mr-3' src={clarity} />
                  <img className='mr-3' src={hubspot} />
                </div>
              </div>
            </div>
            <div className=''>
              <img className='hero-body' src={socios_1} />
            </div>
          </div>
        </div>
      </section>

      <section className='py-6 has-background-white-bis'>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <p className='is-uppercase is-size-4-desktop has-text-grey'> Empatizar</p>
                <img className='my-3' src={empatizar} />
                <p className='is-size-5'> Buscamos establecer relaciones sólidas con los brokers, 
                generar una red de socios comerciales confiables y fortalecer nuestra posición en el mercado.</p>
                <p className='has-text-weight-bold is-size-5-desktop'>Research  | Benchmarking |  Encuesta | ProtoPersona </p>
              </div>
            </div>
          </div>
          <div className='mt-5 is-3 is-variable mx-6 has-text-centered'>
            <img className='' src={SociosImgBench} />
          </div>

          <div className='columns'>
            <div className='column'>
              <img className='' src={SociosImgPersona} />
            </div>
            <div className='column'>
              <img className='' src={SociosImgPersona} />
            </div>
            <div className='column'>
              <img className='' src={SociosImgPersona} />
            </div>

          </div>
        </div>

      </section>

      <section className='py-6 has-background-white-bis'>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <p className='is-uppercase is-size-4-desktop has-text-grey'> idear</p>
                <img className='my-3' src={idear} />
                <p className='is-size-5'>Uno de los desafíos más significativos fue lograr 
                una comunicación efectiva de un producto nuevo en el mercado, lo suficientemente 
                clara para que nuestros socios comerciales pudieran transmitirla a sus propios clientes.</p>
              </div>
            </div>
          </div>
          <div className='mt-5 is-3 is-variable mx-6 has-text-centered'>
            <img className='' src={SociosImgIdear} />
          </div>

        </div>

      </section>

      
      {/* <section className='home'>
        <div className='rombo3 atras'></div>

        <iframe style={{ maxHeight: '450' }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ft7lWTixm5JZRWpeBslVXVY%2FWebsite-3.0%3Fpage-id%3D325%253A606%26type%3Ddesign%26node-id%3D1720-1940%26viewport%3D-599%252C559%252C0.07%26t%3Dho8ka62IOTg3T5Ne-1%26scaling%3Dmin-zoom%26starting-point-node-id%3D328%253A1144%26mode%3Ddesign" allowfullscreen></iframe>

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
      </section> */}
      {/* <div className='columns'>
        <div className='column'></div>
        <div className='column is-two-fifths'>
          <img src={socios_2} />
        </div>
        <div className='column is-one-fifth'>
          <img src={socios_3} />
        </div>
        <div className='column'></div>
      </div> */}
      {/* <section className='has-background-light p-6'>
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
      </section> */}
    </>
  )
}

export default SociosArrenda
