import './footer.css';
import phoneIcon from '../../icons/phoneIcon.png';
import mapIcon from '../../icons/mapIcon.png';
import instaIcon from '../../icons/instaIcon.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <a href="tel:+17373473987" target='_blank'>
          <img src={ phoneIcon } alt="phone icon"/>
        </a>
        <a href="#" target='_blank'>
          <img src={mapIcon } alt="phone icon"/>
        </a>
        <a href="#" target='_blank'>
          <img src={ instaIcon } alt="phone icon"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
