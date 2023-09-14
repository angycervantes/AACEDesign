import imgCarrot1 from '../../assets/img_portafolio/Carrot/imgCarrot1.png'
import imgCarrot2 from '../../assets/img_portafolio/Carrot/imgCarrot2.png'
import imgCarrot3 from '../../assets/img_portafolio/Carrot/imgCarrot3.png'
import imgCarrot4 from '../../assets/img_portafolio/Carrot/imgCarrot4.png'

const CarrotProyect = () => {
    return (
        <>
            <section className='home'>

                <div className='columns is-gapless is-vcentered'>
                    <div className='column is-two-fifths ml-6 has-text-justified container'>
                        <h1 className="title is-2 is-uppercase">Admin System</h1>
                        <p className="is-size-5"> Carrot, which centralizes customer data and facilitates
                            various stages of risk analysis: user registration, KYC, document review, credit analysis,
                            approval, contract signing, and disbursement. </p>
                        
                        <p className='is-size-4'>Design Thinking</p>
                        <ul>
                            <li>User research</li>
                            <li>User Flow </li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                            <li>Atomic UI design</li>
                            <li>Usability testing  (SUS)</li>
                            <li>Handoff to the development team</li>
                        </ul>
                    </div>
                    <div className=''>
                        <img className='' src={imgCarrot1} />
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

export default CarrotProyect