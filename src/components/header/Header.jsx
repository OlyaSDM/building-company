import { Link } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import burger from '../../icons/burger-btn.png';
import closed from '../../icons/closed-btn.png';
import logo from '../../icons/logo.png';


const Header = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <header className='header'>
      <nav className='nav'>
        <img src={ logo } alt="Logo" className='logo'/>
        <div id="header-links" className={isOpen ? 'active' : ''}>
          <Link to="/" className="header-link">Home</Link>
          <Link to="/about" className="header-link">About</Link>
          <Link to="/service" className="header-link">Services</Link>
          <Link to="/gallery" className="header-link">Gallery</Link>
          <Link to="/review" className="header-link">Review</Link>
          <Link to="/contact" className="header-link">Contact</Link>

        </div>
        <div className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? closed : burger} alt="mobile menu icon" />
        </div>
        
      </nav>
    </header>
  )
}

export default Header;
