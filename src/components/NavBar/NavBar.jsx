import { GrLinkedin } from "react-icons/gr";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import './NavBar.css'





function Navbar() {
  return (
    <nav>
      <h2 className="title">Gonzalo J. Rodríguez - Contact and Social Networks</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/gonzalo-jrr/" target="blank" className="linkedin"><GrLinkedin /></a></li>
        <li><a href="https://github.com/ZaloJRodriguez?tab=repositories" target="blank" className="github"><FaSquareGithub /></a></li>
        <li><a href="https://wa.me/34686767644" target="blank" className="whatsapp"><IoLogoWhatsapp /></a></li>
        <li><a href="https://www.instagram.com/zalo_jr/?hl=es" target="blank" className="instagram"><FaInstagramSquare /></a></li>
      </ul>
      <small><a href="mailto:gonzalo.jrodriguez@gmail.com" target="blank" className="email">gonzalo.jrodriguez@gmail.com</a></small>
    </nav>
  );
}

export default Navbar;
