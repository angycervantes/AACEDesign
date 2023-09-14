import imgCarrot1 from '../../assets/img_portafolio/Carrot/imgCarrot1.png'
import imgCarrot2 from '../../assets/img_portafolio/Carrot/imgCarrot2.png'
import imgCarrot3 from '../../assets/img_portafolio/Carrot/imgCarrot3.png'
import imgCarrot4 from '../../assets/img_portafolio/Carrot/imgCarrot4.png'

import foco from '../../assets/iconos/school.svg'
import person from '../../assets/iconos/person.svg'

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
            <section className='home'>

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
                <div className='containerBox2 '>
                <div className='box2'>
                <img className='' src={foco} />
                    <h3 is-size-4> PROBLEMATICA</h3>
                    <p> Nuestro Admin dashboard es complicado de utilizar y tiene deficiencias de información que los usuarios funcionales ocupan en su día.
                        Al momento de su diseño inicial, sólo se tenía contemplado un tipo de usuario, sin embargo, las necesidades operativas van mucho más allá.</p>
                </div>
                <div className='box2 column'>
                <img className='' src={foco} />
                    <h3 is-size-4> OBJETIVOS</h3>
                    <p> Centralizar información relevante de cada expediente de cada usuario registrado
Visibilidad del avance en el producto / funnel
Proporcionar estatus más claros
Visibilidad de Base de datos (qué hay, de manera human readable)
Manejo de aprobaciones y acciones de aprobación
Reportes de LINQ</p>
                </div>
                <div className='box2 column'>
                <img className='' src={foco} />
                    <h3 is-size-4> SOLUCIÓN</h3>
                    <p> Un sistema que centralice los datos de los clientes y facilite varias etapas de análisis de riesgos: registro de usuarios, KYC, revisión de documentos, análisis de crédito, aprobación, firma de contratos y desembolso.</p>
                </div>
                </div>
            </section>
            <section className='has-text-centered container home'>
                <div className=''>
            <img className='' src={person} style={{maxHeight: '56px'}}/>
            <p> Identificar los tipos de usuarios del Admin Dashboard, motivaciones, necesidades principales y pain points.</p>
            <p className='has-text-weight-semibold'>Workshops / Entrevistas / Research </p>
            <div className=''> </div>
            <img className='mt-6' src={usersP}/>
            
            </div>
            </section>

            <section className='has-text-centered container home'>
                <div className=''>
            <img className='' src={definirA} style={{maxHeight: '56px'}}/>
            <p> Identificar los tipos de usuarios del Admin Dashboard, motivaciones, necesidades principales y pain points.</p>
            <p className='has-text-weight-semibold'>Workshops / Entrevistas / Research </p>
            <div className=''> </div>
            <img className='mt-6' src={definir}/>
            
            </div>
            </section>
            
            <section className='has-text-centered home'>
                <div className=''>
                    <img className='shadow' src={imgCarrot3} />
                </div>
            </section>

        </>
    )
}

export default CarrotProyect