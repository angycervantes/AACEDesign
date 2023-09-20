import behance from '../assets/logoRef/Be.svg'
import linkedin from '../assets/logoRef/in.svg'
import vimeo from '../assets/logoRef/v.svg'

const Footer = () => {
  return (
    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>AACE DESIGN</strong>
      <p>by Angélica Cervantes </p>
      <a href='https://www.behance.net/aacedesign' target="_blank"><img src={behance} alt='site logo' style={{maxHeight: '56px'}} className='py-2 px-2'/></a>
      <a href='https://www.linkedin.com/in/aacedesign' target="_blank"><img src={linkedin} alt='site logo' style={{maxHeight: '56px'}} className='py-2 px-2'/></a>
      <a href='https://vimeo.com/angelicacervantes' target="_blank"><img src={vimeo} alt='site logo' style={{maxHeight: '56px'}} className='py-2 px-2'/></a>
      <p>Mexico City</p>
    </p>
  </div>
</footer>
  )
}

export default Footer