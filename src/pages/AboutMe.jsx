import companyLogo from '../assets/Logo/aace.svg';
import picAngy from '../assets/picAngy.png'
const AboutMe = () => {
  return (
    <section id='meAbout' className='section home'>

      <div className='container has-text-centered hommie'>
        <div className='child' style={{ maxWidth: '850px' }}>
        <figure class="image is-128x128">
            <img class="is-rounded" src={picAngy} />
          </figure>
          <h1 className='is-size-3'>Hi, I'm Angelica Cervantes! ✨</h1>
          <p className="text is-text-bold is-size-5"> My approach as a Product and UX/UI designer spans from ideation to concept generation, always considering the business needs and user experience. My ability to empathize and communicate effectively with multidisciplinary teams has allowed me to understand and respect the processes of each area, creating seamless and efficient workflows for the products I develop. </p>
          <button className='button is-medium is-primary'> Enter </button>
        </div>
      </div>
    </section>
  )
}

export default AboutMe