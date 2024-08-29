import './footer.css';
import emailIcon from '../../icons/email.png';
import mapIcon from '../../icons/mapIcon.png';
import instaIcon from '../../icons/instaIcon.png';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <a href="mailto: info@emailgroup.com" target='_blank'>
          <img src={ emailIcon } alt="phone icon" width="30"/>
        </a>
        <a href="#" target='_blank'>
          <img src={ mapIcon } alt="phone icon"/>
        </a>
        <a href="#" target='_blank'>
          <img src={ instaIcon } alt="phone icon"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;
