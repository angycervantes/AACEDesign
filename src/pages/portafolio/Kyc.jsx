
import figma from '../../assets/logoRef/figma.png'
import miro from '../../assets/logoRef/miro.png'
import jira from '../../assets/logoRef/jira.png'
import confluence from '../../assets/logoRef/confluence.png'

import Benchmarking from '../../assets/iconos/Benchmarking.svg'

import imgKYC1 from '../../assets/img_portafolio/KYC/imgKYC1.png'
import imgKYC2 from '../../assets/img_portafolio/KYC/imgKYC2.png'
import imgKYCBenchM from '../../assets/img_portafolio/KYC/imgKYCBenchM.png'
import imgWireframing from '../../assets/img_portafolio/KYC/imgWireframing.png'
import imgPrototipar1 from '../../assets/img_portafolio/KYC/imgPrototipar1.png'
import imgPrototipar2 from '../../assets/img_portafolio/KYC/imgPrototipar2.png'

const Kyc = () => {
  return (
    <>
      <section className='main hero is-fullwidth-with-navbar'>
        <div className='hero-body'>
          <div className='columns is-gapless is-vcentered'>
            <div className='column is-two-fifths has-text-justified container'>
              <div className='main-content'>
                <h1 className="title is-2 is-uppercase has-text-weight-normal">UI Design KYC</h1>
                <p className='is-size-5-desktop'> Carrot, el sistema centraliza los datos de los clientes
                  y facilita varias etapas de análisis de riesgos: registro de usuarios, KYC,
                  revisión de documentos, análisis de crédito, aprobación, firma de contratos y desembolso. </p>
                <p className='linea'> </p>
                <ul>
                  <li>User research</li>
                  <li>User Flow </li>
                  <li>Design system</li>
                  <li>Integration flow of KYC</li>
                  <li>Prototyping Mobile</li>
                </ul>
                <div className='mt-4'>
                  <img className='mr-3' src={figma} />
                  <img className='mr-3' src={miro} />
                  <img className='mr-3' src={jira} />
                  <img className='mr-3' src={confluence} />
                </div>
              </div>
            </div>
            <div className=''>
              <img className='hero-body' src={imgKYC1} />
            </div>
          </div>
        </div>
      </section>

      <section className='hero is-fullheight-with-navbar is-relative' id="mockup">
        <div className='hero-body is-align-self-center'>
          <div className='has-text-centered'>
            <img className='mt-6' src={imgKYC2} />
          </div>
        </div>
      </section>

      <section className='py-6 has-background-white-bis'>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2 is-vcentered'>
                <p className='is-uppercase is-size-4-desktop has-text-grey'> <img className='my-3' src={Benchmarking} />Benchmarking</p>
                <p className='is-size-5 '> Se está elaborando un enfoque de UX y UI para la integración 
                del SDK de Nubarium, dado que el proveedor proporciona el flujo sin un diseño específico. 
                Nuestra intención es documentar las plataformas existentes y utilizarlas como base para nuestro proceso de KYC.</p>
              </div>
            </div>
          </div>
          <div className='mt-5 is-3 is-variable mx-6 has-text-centered'>
            <img className='' src={imgKYCBenchM} />
          </div>
        </div>
      </section>

      <section className='py-6 '>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
                <p className='is-uppercase is-size-4-desktop has-text-grey'>wireframing</p>
                <img className='my-3' src={Benchmarking} />
                <p className='is-size-5'> Se han creado los wireframes del flujo de KYC, 
                incorporando modificaciones en el diseño y en la redacción de UX para mejorar 
                la experiencia, reducir posibles errores en la captura de identificaciones y garantizar 
                la ejecución exitosa de todo el proceso de KYC.</p>
              </div>
            </div>
          </div>
          <div className='mt-5 is-3 is-variable mx-6 has-text-centered'>
            <img className='' src={imgWireframing} />
          </div>
        </div>
      </section>

      <section className='py-6 has-background-white-bis'>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2 is-vcentered'>
              <img className='my-3' src={Benchmarking} />
                <p className='is-uppercase is-size-4-desktop has-text-grey'> Prototipar</p>
                <p className='is-size-5 '> Se creó un prototipo del flujo para mobile y desktop en Figma, 
                utilizando el Design System de la marca.</p>
              </div>
            </div>
          </div>
          <div className='mt-5 is-3 is-variable mx-6 has-text-centered'>
            <img className='' src={imgPrototipar1} />
            <img className='mt-5' src={imgPrototipar2} />
          </div>
        </div>
      </section>

      <section className='py-6 '>
        <div className=' container'>
          <div className='has-text-centered is-vcentered'>
            <div className='columns'>
              <div className='column is-8 is-offset-2'>
              <img className='my-3' src={Benchmarking} />
                <p className='is-uppercase is-size-4-desktop has-text-grey'>Prueba</p>
                <p className='is-size-5'> Realizamos pruebas con el equipo de QA y definimos 
                los casos que no se habían tenido en cuenta. De esta manera, tomamos decisiones 
                como la inclusión de alertas o pantallas para prevenir errores, así como proporcionar 
                retroalimentación y soporte al usuario en caso de fallos por parte del proveedor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Kyc