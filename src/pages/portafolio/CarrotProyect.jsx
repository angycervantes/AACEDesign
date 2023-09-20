import imgCarrot1 from '../../assets/img_portafolio/Carrot/imgCarrot1.png'
import imgCarrot2 from '../../assets/img_portafolio/Carrot/imgCarrot2.png'
import imgCarrot3 from '../../assets/img_portafolio/Carrot/imgCarrot3.png'
import imgCarrot4 from '../../assets/img_portafolio/Carrot/imgCarrot4.png'
import carrotCompleto from '../../assets/provicional/carrotComplet.png'

import foco from '../../assets/iconos/school.svg'
import person from '../../assets/iconos/person.svg'
import perfil from '../../assets/iconos/perfil.svg'

import figma from '../../assets/logoRef/figma.png'
import miro from '../../assets/logoRef/miro.png'
import jira from '../../assets/logoRef/jira.png'
import confluence from '../../assets/logoRef/confluence.png'

import usersP from '../../assets/img_portafolio/Carrot/secciones/usersPersona.svg'
import definir from '../../assets/img_portafolio/Carrot/secciones/definirAcciones.png'
import definirA from '../../assets/img_portafolio/Carrot/secciones/definirA.svg'
const CarrotProyect = () => {
    return (
        <>
            {/* <section className='home has-background-white-bis'>

                <div className='columns is-gapless is-vcentered'>
                    <div className='column is-two-fifths ml-6 has-text-justified container'>
                        <h1 className="title is-2 is-uppercase">Admin System</h1>
                        <p className="is-size-5"> Carrot, el sistema centraliza los datos de los clientes
                            y facilita varias etapas de análisis de riesgos: registro de usuarios, KYC,
                            revisión de documentos, análisis de crédito, aprobación, firma de contratos y desembolso. </p>

                        <p className='is-size-5 has-text-weight-medium mt-4'>End to end Project Design Thinking</p>
                        <p className='linea'> </p>
                        <ul>
                            <li>User research</li>
                            <li>User Flow </li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Atomic UI design</li>
                            <li>Usability testing  (SUS)</li>
                            <li>Handoff to the development team</li>
                        </ul>
                        <div className='mt-4'>
                            <img className='' src={figma} />
                            <img className='' src={miro} />
                            <img className='' src={jira} />
                            <img className='' src={confluence} />
                        </div>
                    </div>
                    <div className=''>
                        <img className='' src={imgCarrot1} />
                    </div>
                </div>

            </section>

            <section className='has-text-centered home'>
                <div className=''>
                    <img className='shadow' src={imgCarrot2} />
                </div>
            </section>

            <section className='home has-background-white-bis'>
                <div className=' container'>
                    <div className='columns  mt-5 is-3 is-variable'>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={foco} />
                                        <h4> PROBLEMATICA</h4>
                                        <p> Nuestro Admin dashboard es complicado de utilizar y tiene deficiencias de información que los usuarios funcionales ocupan en su día.
                                            Al momento de su diseño inicial, sólo se tenía contemplado un tipo de usuario, sin embargo, las necesidades operativas van mucho más allá.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={foco} />
                                        <h4> OBJETIVOS</h4>
                                        <p> Centralizar información relevante de cada expediente de cada usuario registrado
                                            Visibilidad del avance en el producto / funnel
                                            Proporcionar estatus más claros
                                            Visibilidad de Base de datos (qué hay, de manera human readable)
                                            Manejo de aprobaciones y acciones de aprobación
                                            Reportes de LINQ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={foco} />
                                        <h4> SOLUCIÓN</h4>
                                        <p> Un sistema que centralice los datos
                                            de los clientes y facilite varias etapas de análisis de riesgos:
                                            registro de usuarios, KYC, revisión de documentos, análisis de crédito,
                                            aprobación, firma de contratos y desembolso.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='home'>
                <div className=' container'>
                <img className='' src={person} style={{ maxHeight: '56px' }} />
                    <p> Identificar los tipos de usuarios del Admin Dashboard, motivaciones, necesidades principales y pain points.</p>
                    <p className='has-text-weight-semibold'>Workshops / Entrevistas / Research </p>
                    <div className='columns  mt-5 is-3 is-variable'>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={perfil} />
                                        <h4>Ops Team</h4>
                                        <p> Core Jobs
                                            <ol>
                                                <li>Revisión de historial crediticio </li>
                                                <li>Actualizar estatus a lo largo de la aplicación </li>
                                                <li>Revisión documental de clientes </li>
                                                <li>Aprobación / denegación de solicitudes formales </li>
                                                <li>Validar cuentas bancarias </li>
                                                <li>Generar reportes de LINQ </li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={perfil} />
                                        <h4> Sales Team</h4>
                                        <p> Core Jobs
                                            <ol>
                                                <li>Seguimiento a clientes</li>
                                                <li>Cierre de tratos</li>
                                                <li>Revisión documental de clientes</li>
                                                <li>Obtener detalles de contrato u otra información cargada del usuario</li>
                                                <li>Validar avance de los usuarios en el funnel</li>
                                                <li>Validar avance de usuarios en la aplicación</li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={perfil} />
                                        <h4> CS Team</h4>
                                        <p> Related Jobs:
                                            <ol>
                                                <li>Llevar tracking de qué usuarios son nuevos </li>
                                                <li>Llevar tracking de qué usuarios se ha notificado al inquilino</li>
                                                <li>Notificar inquilinos manualmente </li>
                                            </ol>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='has-text-centered container home'>
                <div className='has-text-left'>
                    <img className='' src={definirA} style={{ maxHeight: '56px' }} />
                    <p> De acuerdo a los hallazgos definimos las features más relevantes pantallas para visualizar la información que habría que destacar y</p>
                    <p className='has-text-weight-semibold'>Wireframes/User Flow</p>
                    <div className='has-text-centered'> 
                    <img className='mt-6' src={definir} />
                    </div>

                </div>
            </section>

            <section className='has-text-centered home'>
                <div className=''>
                    <img className='shadow' src={imgCarrot3} />
                </div>
            </section>
             */}
            <section className='has-text-centered'>
            <img className='has-text-centered' src={carrotCompleto} />
            </section>

        </>
    )
}

export default CarrotProyect