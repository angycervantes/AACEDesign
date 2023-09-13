import companyLogo from '../assets/Logo/aace.svg';

const AboutMe = () => {
  return (
    <section className='section home'>
      {/* <div className='rombo2'> </div>
      <div className='rombo3'> </div> */}
      <div className='container has-text-centered hommie'>
        <div className='child' style={{ maxWidth: '850px' }}>
          <img className='is-inline-block' src={companyLogo} style={{ maxHeight: '90px' }} />
          <h1 className='is-size-3'>Hi, I'm angelica cervantes! ✨</h1>
          <p className="text is-text-bold is-size-5"> My approach as a Product and UX/UI designer spans from ideation to concept generation, always considering the business needs and user experience. My ability to empathize and communicate effectively with multidisciplinary teams has allowed me to understand and respect the processes of each area, creating seamless and efficient workflows for the products I develop. </p>
          <button className='button is-medium is-primary'> Enter </button>
        </div>
      </div>
    </section>
  )
}

export default AboutMe