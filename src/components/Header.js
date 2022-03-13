import Pin from "../Assets/iconos/ic_pin.png";
import Arrow from "../Assets/iconos/arrow.png";

function Header() {
  return (
    <div className="containerHeader">
      <div className="titleHeader">
        <img src={Pin} className="logoPin" alt="logo pin maps" />
        <h1 className="titlePrincipal">AMERICA DEL SUR</h1>
      </div>
      <hr className="linea"></hr>
      <p className="titleSecondary">Lugares maravillosos por America del Sur</p>
      <p className="bajada">
        Estos son algunos lugares que elijen la mayoría de los turistas que
        visitan America del Sur.
      </p>
      <div className="cuadrado">
        <div className="containerBox">
          <h6 className="textBox">
            Próxima Aventura <img src={Arrow} alt="flecha apuntando hacia la derecha" />
          </h6>
          <h6 className="subtitleBox">Europa Meridional</h6>
          <p className="parrafoBox">
            Forman parte veinte países, ej. España, Francia, etc.
          </p>
        </div>
      </div>
      <hr className="linea2"></hr>
      <div className="circulo"></div>
      <div className="circulo2">01</div>
    </div>
  );
}

export default Header;
