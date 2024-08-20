import { Link } from 'react-router-dom';
import logo from "../../icons/logo.png";
import burger from "../../icons/burger.png";
import closed from "../../icons/closed.png";
import './header.css';
import { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <nav>
        <img src={logo} className="logo" alt="circle logo with building instruments"/>

        <div className='menu' onClick={() => setMenuOpen(!menuOpen)}>
          <img 
          src={menuOpen ? closed : burger} 
          alt={menuOpen ? "mobile menu closed button" : "mobile menu open button"} 
          />
        </div>

        <div id="links" className={menuOpen ? "open" : ""}>
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About</Link>
          <Link to="/service" className="link">Services</Link>
          <Link to="/maintenance" className="link">Property maintenance</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>
      </nav>
    
  )
}

export default Header;
