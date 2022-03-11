import Nav from "../components/Nav";

function Home() {
  return (
    <div>
        <Nav/>
      <h1 className="titleContacto">Contactate, te estamos esperando</h1>
      <h2 className="titleContacto2">Otras vías de contacto</h2>
      <div className="mapsContacto">
      <iframe title="Maps de Aserradero Los Andes" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.1271641212406!2d-68.66608473482682!3d-32.99139287716485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e6cd86adec33b%3A0xf1827e501699c7b4!2sAserradero%20y%20F%C3%A1brica%20de%20Envases%20Los%20Andes!5e0!3m2!1ses-419!2sar!4v1645999886176!5m2!1ses-419!2sar" width="50%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
      <div className="textMaps">
      <p>Km 1023 - Ruta Nacional 7</p>
      <a href="tel:2615069690"><p>261 506-9690</p></a>
      <a href="mailto:hello@grupopuebla.com"><p>hello@grupopuebla.com</p></a>
      </div>      
      </div>
    </div>
  );
}

export default Home;