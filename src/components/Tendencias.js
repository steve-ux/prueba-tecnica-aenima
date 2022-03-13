import Tendencia1 from "../Assets/img/card_01.png";
import Tendencia2 from "../Assets/img/card_02.png";
import Tendencia3 from "../Assets/img/card_03.png";

function Tendencias() {
  return (
      <div className="bodyTendencias">   
      <h2 className="titleTendencias">Tendencias</h2>   
    <div class="container">
  <div class="card1">
    <div class="card__header">
      <img src={Tendencia1} alt="Montañas verdes" className="card__image" width="600"/>
      <span class="tag tag-pink">NUEVO</span>
    </div>
    <div class="card__body">
      
      <h4 className="titleMontañas">Montañas y magia</h4>
      <p>Aquí la descripción para <span>Montañas y magia.</span></p>
    </div>
  </div>
  <div class="card2">
    <div class="card__header">
      <img src={Tendencia2} alt="Sombrillas de playa" className="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Playas y sol</h4>
      <p>La descripción de <span>Playas y sol</span> debe ser esta.</p>
    </div>
  </div>
  <div class="card3">
    <div class="card__header">
      <img src={Tendencia3} alt="Hombres en la nieve" className="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Nieve y aventura</h4>
      <p>Contiene la información de <span>Nieve y aventura.</span></p>
    </div>
    
  </div>
</div>
</div>
  );
}

export default Tendencias;


