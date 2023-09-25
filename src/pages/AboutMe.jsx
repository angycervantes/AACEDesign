import bedu from '../assets/logoRef/beduLogo.png'
import devf from '../assets/logoRef/devfLogo.png'
import picAngy from '../assets/picAngy.png'


const AboutMe = () => {
  return (
    <section id='meAbout' className='hero is-fullheight-with-navbar'>
      <div class="hero-body">
      <div className='container has-text-centered hommie'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='child'>
              <figure class="image is-128x128">
                  <img class="is-rounded imgA" src={picAngy} />
                </figure>
            <h1 className='is-size-3'>Hi, I'm Angelica Cervantes! ✨</h1>
            <p className="text is-text-bold is-size-5"> Mi enfoque como diseñadora de Producto
            y UX/UI abarca desde la ideación hasta la generación de conceptos, considerando siempre las necesidades del negocio y la experiencia del usuario.
            <br></br><br></br> Mi capacidad para empatizar y comunicarme efectivamente con equipos multidisciplinarios me ha permitido comprender y respetar los procesos
            de cada área, creando flujos de trabajo fluidos y eficientes para los productos que desarrollo. </p>
            <p className="text is-text-bold is-size-5"> Me encanta ❣️ aprender cosas nuevas </p>
            <p className="text is-text-bold is-size-6 has-text-weight-semibold	"> Últimas Certificaciones </p>
            <figure class=" columns image is-20x20">
              <a href='https://www.credly.com/badges/578aa145-8389-436f-86eb-be78e392d2fe?source=linked_in_profile target="_blank"'><img class="column imgA" src={bedu} style={{ maxWidth: '80px' }} /></a>
              <img class="column imgA" src={devf} style={{ maxWidth: '80px' }} />
            </figure>
            </div>
           </div>
           </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe