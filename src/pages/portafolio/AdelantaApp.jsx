import adelantaA from '../../assets/provicional/webapp.png'
import imgAdelanta from '../../assets/img_portafolio/adelanta/webapp.png'

import figma from '../../assets/logoRef/figma.png'
import miro from '../../assets/logoRef/miro.png'
import jira from '../../assets/logoRef/jira.png'
import confluence from '../../assets/logoRef/confluence.png'

import e2e from '../../assets/img_portafolio/Carrot/secciones/e2e.svg'
import empatizar from '../../assets/img_portafolio/Carrot/secciones/empatizar.svg'
import definirA from '../../assets/img_portafolio/Carrot/secciones/definirA.svg'
import idear from '../../assets/img_portafolio/Carrot/secciones/idear.svg'
import prototipar from '../../assets/img_portafolio/Carrot/secciones/prototipar.svg'


import mockupAdelanta from '../../assets/img_portafolio/adelanta/mockupAdelanta.png'
import researchAdelanta from '../../assets/img_portafolio/adelanta/researchAdelanta.png'
import fotoPersona from '../../assets/img_portafolio/adelanta/fotoPersona.png'
import userPersona from '../../assets/img_portafolio/adelanta/userPersona_1.svg'
import userPersona2 from '../../assets/img_portafolio/adelanta/userPersona_2.svg'
import definir1 from '../../assets/img_portafolio/adelanta/definir_1.png'
import definir2 from '../../assets/img_portafolio/adelanta/definir_2.png'
import definir3 from '../../assets/img_portafolio/adelanta/definir_3.png'
import idearAdelanta from '../../assets/img_portafolio/adelanta/idearAdelanta.png'
import prototiparAdelanta from '../../assets/img_portafolio/adelanta/prototiparAdelanta.png'

const AdelantaApp = () => {
  return (
    <>
      <section className='main with-rombo hero is-fullwidth-with-navbar'>
        <div className='hero-body'>
          <div className='main-content has-text-centered'>
            <h1 className="title is-2 is-uppercase has-text-weight-medium ">Web App</h1>
            <p className='is-size-5-desktop'> Adelanta es un producto digital que le permite cobrar hasta 12 meses de alquiler de sus propiedades arrendadas.</p>
            <div className=''>
              <img className='hero-body' src={imgAdelanta} />
            </div>
            <div className='mt-4'>
              <img className='mr-3' src={figma} />
              <img className='mr-3' src={miro} />
              <img className='mr-3' src={jira} />
              <img className='mr-3' src={confluence} />
            </div>
          </div>
        </div>
      </section>

      <section className='py-6'>
        <div className='container has-text-centered'>

          <div className='is-vcentered'>

            <p className='is-uppercase is-size-4-desktop has-text-grey'> End to End Project </p>
            <img className='my-3' src={e2e} />
            <div className='columns'>
              <div className='column is-half'>
                <img className='' src={mockupAdelanta} />
              </div>
              <div className='column is-half p-6'>
                <h2 className='is-size-4'> PROBLEMATICA</h2>
                <p className='has-text-justified is-size-5-desktop'>
                  La plataforma tiene como objetivo agilizar el proceso haciéndolo completamente en línea.
                  A través de una estrecha colaboración con las partes interesadas, hemos rediseñado el proceso,
                  automatizando la etapa inicial de fijación de precios y aprobación, y creando un flujo modular y fácil de usar.</p>

                <ul>
                  <li>User research</li>
                  <li>User Flow </li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Atomic UI design</li>
                </ul>

              </div>

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
                <p className='is-size-5'> Realizamos un análisis exhaustivo de los datos necesarios
                  para la aprobación de un posible cliente, recopilando información clave de cada una
                  de las áreas involucradas. Esto incluyó datos obligatorios y preferenciales para el proceso de underwriting,
                  detalles para la creación de una cuenta en nuestra web app, así como información necesaria para la validación
                  de datos personales por parte de nuestro proveedor, considerando tanto los requisitos (req) como las posibles
                  respuestas (res) que podríamos obtener.</p>
                <p className='has-text-weight-bold is-size-5-desktop'>Workshops  | Research | User Persona </p>
              </div>
            </div>
          </div>
          <div className='mt-5 is-3 is-variable mx-6 has-text-centered'>
            <img className='' src={researchAdelanta} />
          </div>

          <div className='columns'>
            <div className='column'>
              <img className='' src={userPersona} />
            </div>
            <div className='column'>
              <img className='' src={fotoPersona} />
            </div>
            <div className='column'>
              <img className='' src={userPersona2} />
            </div>

          </div>
        </div>

      </section>

      <section className='py-6 has-background-white-bis'>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <p className='is-uppercase is-size-4-desktop has-text-grey'> Definir</p>
                <img className='my-3' src={definirA} />
                <p className='is-size-5'> Realizamos un análisis detallado y creamos una tabla 
                comparativa en Excel que abarca toda la información disponible. De esta manera, 
                identificamos cómo podríamos obtenerla de los usuarios mediante una redacción 
                de UX adecuada, asegurando que el flujo de navegación y la agrupación de cada paso 
                del proceso sean lógicos.</p>

              </div>
            </div>
          </div>

          <div className='columns mt-6'>
            <div className='column'>
              <img className='' src={definir1} />
            </div>
            <div className='column'>
              <img className='' src={definir2} />
            </div>
          </div>

          <div className='columns box mt-6 is-vcentered'>
            <div className='column'>
              <img className='' src={definir3} />
            </div>
            <div className='column'>
              <p>Gracias a las herramientas que integramos, como HubSpot en nuestra web app, pudimos realizar un mapeo de en qué etapa del flujo los usuarios encontraban dificultades. Además, al ofrecer soporte a través de WhatsApp, estábamos alerta de las partes del flujo que estaban resultando complicadas para ellos.</p>
            </div>
          </div>
        </div>

      </section>

      <section className='py-6  has-background-white-bis'>
                <div className='container'>

                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> Idear </p>
                                <img className='my-3' src={idear} />
                                <p className='is-size-5-desktop'> El principal desafío de este proyecto 
                                es la necesidad de una documentación extensa. Para abordar este desafío, 
                                lo hemos abordado de manera modular, dividiendo el flujo en múltiples pasos 
                                para una experiencia más clara. Esto nos ha permitido satisfacer las necesidades 
                                de suscripción del negocio y al mismo tiempo sugerir otras soluciones para 
                                una experiencia de usuario mejorada.</p>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <img className='' src={idearAdelanta} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className='py-6'>
                <div className='container'>

                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> Prototipar </p>
                                <img className='my-3' src={prototipar} />
                                <p className='is-size-5-desktop'>Se creó un prototipo del flujo de las tareas 
                                principales en Figma, utilizando el Design System de la marca, con el objetivo 
                                de ponerlo a prueba con los usuarios</p>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <img className='' src={prototiparAdelanta} />
                            </div>

                        </div>
                    </div>

                </div>
            </section>

      <section className='has-text-centered'>
        <img className='has-text-centered' src={adelantaA} style={{ maxWidth: '1280' }} />
      </section>
    </>
  )
}

export default AdelantaApp