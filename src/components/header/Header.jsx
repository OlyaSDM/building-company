import { Link } from 'react-router-dom';
import logo from "../../icons/logo.png";
import './header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="circle logo with building instruments"/>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About Us</Link>
        <Link to="/service" className="link">Our services</Link>
        <Link to="/maintenance" className="link">Maintenance Service</Link>
        <Link to="/contact" className="link">Contact Us</Link>
      </nav>
    </header>
  )
}

export default Header;
