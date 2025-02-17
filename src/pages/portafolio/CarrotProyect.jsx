import imgCarrot1 from '../../assets/img_portafolio/Carrot/imgCarrot1.png'
import imgCarrot2 from '../../assets/img_portafolio/Carrot/imgCarrot2.png'


import foco from '../../assets/iconos/school.svg'
import perfil from '../../assets/iconos/perfil.svg'

import figma from '../../assets/logoRef/figma.png'
import miro from '../../assets/logoRef/miro.png'
import jira from '../../assets/logoRef/jira.png'
import confluence from '../../assets/logoRef/confluence.png'

import e2e from '../../assets/img_portafolio/Carrot/secciones/e2e.svg'
import analisisdeRiesgo from '../../assets/img_portafolio/Carrot/secciones/underwriting.png'
import empatizar from '../../assets/img_portafolio/Carrot/secciones/empatizar.svg'
import definirA from '../../assets/img_portafolio/Carrot/secciones/definirA.svg'
import idear from '../../assets/img_portafolio/Carrot/secciones/idear.svg'
import prototipar from '../../assets/img_portafolio/Carrot/secciones/prototipar.svg'
import test from '../../assets/img_portafolio/Carrot/secciones/test.svg'
import designSystem from '../../assets/img_portafolio/Carrot/secciones/designSystem.svg'


import definirCarrot from '../../assets/img_portafolio/Carrot/CarrotDefinir.png'
import idearImg from '../../assets/img_portafolio/Carrot/secciones/idearImg.png'
import prototipoImg from '../../assets/img_portafolio/Carrot/secciones/prototiparImg.png'
import test1 from '../../assets/img_portafolio/Carrot/secciones/test_1.png'
import test2 from '../../assets/img_portafolio/Carrot/secciones/test_2.png'
import test3 from '../../assets/img_portafolio/Carrot/secciones/test_3.png'
import iterar_empatizar from '../../assets/img_portafolio/Carrot/secciones/iterar_empatizar.png'
import iterar_idear from '../../assets/img_portafolio/Carrot/secciones/iterar_idear.png'
import iterar_prototipar from '../../assets/img_portafolio/Carrot/secciones/iterar_prototipar.png'

import designS from '../../assets/img_portafolio/Carrot/designS.png'





const CarrotProyect = () => {
    return (
        <>
            <section className='main with-rombo hero is-fullwidth-with-navbar'>
                <div className='hero-body'>
                    <div className='columns is-gapless is-vcentered'>
                        <div className='column is-two-fifths has-text-justified container'>
                            <div className='main-content'>
                                <h1 className="title is-2 is-uppercase has-text-weight-normal">Admin System</h1>
                                <p className='is-size-5-desktop'> Carrot, el sistema centraliza los datos de los clientes
                                    y facilita varias etapas de análisis de riesgos: registro de usuarios, KYC,
                                    revisión de documentos, análisis de crédito, aprobación, firma de contratos y desembolso. </p>

                                <p className='is-size-5-desktop has-text-weight-medium mt-4'>End to end Project Design Thinking</p>
                                <p className='linea'> </p>
                                <ul>
                                    <li>Metodología Scrum</li>
                                    <li>User research</li>
                                    <li>Wireframing</li>
                                    <li>Prototyping</li>
                                    <li>Atomic UI design</li>
                                    <li>Usability testing  (SUS)</li>
                                    <li>Handoff to the development team</li>
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
                            <img className='hero-body' src={imgCarrot1} />
                        </div>
                    </div>
                </div>
            </section>

            <section className='hero is-fullheight-with-navbar is-relative' id="mockup">
                <div className='hero-body is-align-self-center'>
                    <div className='has-text-centered'>
                        <img className='mt-6 shadow' src={imgCarrot2} />
                    </div>
                </div>
            </section>

            <section className='py-6  has-background-white-bis'>
                <div className='container'>

                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> End to End Project </p>
                                <img className='my-3' src={e2e} />
                                <p className='is-size-5-desktop'> Este proyecto fue trabajado para una Start up cuyo producto 
                                financiero principal es brindar liquidez, mediante el adelanto de sus rentas, a propietarios 
                                de inmuebles que cuenten con un contrato de arrendamiento vigente.</p>
                            </div>
                        </div>
                    </div>
                    <div className='columns mt-5 is-3 is-variable mx-4'>
                        <div className='column'>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <img className='' src={foco} />
                                        <h4> PROBLEMATICA</h4>
                                        <p> Nuestro Admin Dashboard presenta dificultades de uso 
                                            y carece de información clave, lo que ralentiza el análisis 
                                            de solicitudes. Como resultado, se recurre a otras herramientas 
                                            que no son seguras o que incrementan los costos del proceso.
                                        </p>
                                        
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
                                        <p> 
                                        Ahorrar tiempo y dinero al simplificar o automatizar 
                                        las tareas de los distintos usuarios funcionales, 
                                        optimizando el proceso de aprobación de un adelanto 
                                        desde la creación de la solicitud hasta el desembolso.
                                        </p>
                                        <br></br>
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
                                        <p> Optimizar el Admin System para facilitar 
                                            las tareas de los distintos usuarios funcionales, 
                                            permitiéndoles completarlas con éxito en menos tiempo. 
                                            Además, se busca eliminar la necesidad de al menos tres herramientas 
                                            adicionales, reduciendo la complejidad y los costos operativos.
                                        </p>
                                    </div>
                                </div>
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
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> empatizar</p>
                                <img className='my-3' src={empatizar} />
                                <p className='is-size-5-desktop'>Identificar los tipos de usuarios del Admin Dashboard, 
                                <br></br>motivaciones, tareas principales y touch points.</p>
                                <p className='has-text-weight-bold is-size-5-desktop'>  Contextual Interview / Research / Interview </p>
                            </div>
                        </div></div>
                    <div className='columns mt-5 is-3 is-variable mx-4'>
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
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
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
                                        <p> Core Jobs:
                                            <ol>
                                                <li>Seguimiento a clientes</li>
                                                <li>Cierre de tratos</li>
                                                <li>Revisión documental de clientes</li>
                                                <li>Obtener detalles de contrato u otra información cargada del usuario</li>
                                                <li>Validar avance de los usuarios en el funnel</li>
                                                <li>Validar avance de usuarios en la aplicación</li>
                                            </ol>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <br></br>
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
                                            Related Jobs:
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
                    </div>
                    <hr></hr>
                    <div className='container'>
                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                
                                <p className='is-size-5-desktop'> Durante la inmersión contextual, se obtuvo una comprensión
                                 más profunda del flujo de trabajo de estos equipos y de sus puntos de contacto en el proceso 
                                 de evaluación de riesgos, una de las necesidades clave del negocio.</p>  
                            </div>
                        </div>
                    </div>
                    <img className='my-3' src={analisisdeRiesgo} />
                    </div>
                    </div>
                
            </section>

            <section className='py-6  has-background-white-bis'>
                <div className='container'>

                    <div className='has-text-centered is-vcentered'>

                        <p className='is-uppercase is-size-4-desktop has-text-grey'> Definir </p>
                        <img className='my-3' src={definirA} />
                        <div className='columns'>
                            <div className='column is-half'>
                                <img className='' src={definirCarrot} />
                            </div>
                            <div className='column is-half m-6 p-6'>

                                <p className='has-text-justified is-size-5-desktop'>
                                    De acuerdo a los hallazgos, hemos definido las características más relevantes y las pantallas necesarias para visualizar la información que se debe destacar. Además, hemos buscado entender cómo se ajusta Carrot a las tareas de distintos usuarios funcionales y qué tan complicado es que realicen con éxito las tareas básicas, que son principalmente las más importantes.

                                    Búsquedas de información de adelantos e usuarios.
                                    Visualización de estadísticas.
                                    Filtrado y ordenamiento de datos.
                                    Edición y revisión de un expediente.

                                    Descubrir que otras funcionalidades les facilitarían el análisis para el underwriting.
                                    Creemos que la info en carrot no es la más actual
                                    Ocupan más otras herramientas para guardar todo el expediente
                                    Carrot no se ocupa para el deal committee pues le faltan los expedientes actualizados.</p>

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className='py-6'>
                <div className=' container'>
                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> idear</p>
                                <img className='my-3' src={idear} />
                                <p className='is-size-5'> Se elaboraron los wireframes para el proceso de solicitud de Adelanto,
                                    considerando diferentes casos, como la presencia de personas morales,
                                    lo que requirió formularios más extensos para garantizar la presentación
                                    de la información necesaria.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 is-3 is-variable mx-6'>
                        <img className='' src={idearImg} />
                    </div>
                </div>
            </section>

            <section className='py-6  has-background-white-bis'>
                <div className='container'>

                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> Prototipar </p>
                                <img className='my-3' src={prototipar} />
                                <p className='is-size-5-desktop'> Se creó un prototipo del flujo de las tareas principales en Figma, utilizando el Design System de la marca, con el objetivo de ponerlo a prueba con los usuarios </p>
                            </div>
                        </div>
                        <div className='columns'>
                            <div className='column is-12'>
                                <img className='' src={prototipoImg} />
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
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> Probar </p>
                                <img className='my-3' src={test} />
                                <p className='is-size-5-desktop'> El proceso de mejora incluye la evaluación de las experiencias de usuarios y necesidades, así como la prueba de un nuevo prototipo de calificación de documentos.
                                    Medimos el éxito mediante un puntaje mínimo de 70 en el System Usability Scale (SUS) y recopilamos retroalimentación cualitativa de usuarios funcionales para garantizar mejoras alineadas con sus necesidades. </p>
                            </div>
                        </div>
                        <div className=''>
                            <img className='mx-4' src={test1} />
                            <img className='mx-4' src={test2} />
                            <img className='mx-4' src={test3} />
                        </div>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-size-4-desktop has-text-weight-bold mt-5'>score total 88.75</p>
                                <p className='is-size-5-desktop my-3'>Llevamos a cabo el System Usability Scale (SUS) con un grupo de 6 usuarios pertenecientes a equipos diversos, centrándonos en la evaluación de sus respectivas tareas. El resultado global del SUS fue un puntaje de 88.75.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='py-6 has-background-dark'>
                <div className='container'>
                    <div className='box2 my-5'>
                        <div className=''>
                            <img className='' src={test} />
                        </div>
                        <div className=''>
                            <p className='is-size-4-desktop'>iterar</p>
                            <br></br>
                            <p className=''>La metodología utilizada es un proceso no lineal que se basa en la iteración constante para abordar problemas y promover la innovación.</p>
                        </div>
                    </div>
                    <div className='has-text-centered my-5 '>
                        <img className='my-5 px-5' src={iterar_empatizar} />
                        <img className='my-5 px-5' src={iterar_idear} />
                        <img className='my-5 px-5' src={iterar_prototipar} />
                    </div>
                </div>
            </section>

            <section className='py-6'>
                <div className='container'>

                    <div className='has-text-centered is-vcentered'>
                        <div className='columns'>
                            <div className='column is-8 is-offset-2'>
                                <p className='is-uppercase is-size-4-desktop has-text-grey'> Design System </p>
                                <img className='my-3' src={designSystem} />
                            </div>
                        </div>
                        <div className=''>
                            <img className='mx-4' src={designS} />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default CarrotProyect