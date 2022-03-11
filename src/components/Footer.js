import Logo2 from "../Assets/logo/logo_02.png";
import Instagram from "../Assets/iconos/instagram.png";
import Facebook from "../Assets/iconos/facebook.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footerContainer">
          <div>
            <Link to="/"><img src={Logo2} alt="Logo viajes blanco" /></Link>
          </div>
          <div className="containerRedes">
            <a href="https://www.instagram.com/viajestips/" target="_blank"><img src={Instagram} alt="Logo instagram" className="logoFb" /></a>
            <a href="https://www.facebook.com/viajestipsok" target="_blank"><img src={Facebook} alt="Logo facebook" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
