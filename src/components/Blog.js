import BlogImg1 from "../Assets/img/articulo_big_01.png";
import BlogImg2 from "../Assets/img/articulo_big_02.png";
import BlogImg3 from "../Assets/img/articulo_small_01.png";
import BlogImg4 from "../Assets/img/articulo_small_02.png";
import BlogImg5 from "../Assets/img/articulo_small_03.png";
import Time from "../Assets/iconos/time.png";

function Blog() {
  return (
    <div className="galleryContainer">
      <div className="galleryItem">
        <img src={BlogImg1} alt="" className="galleryImg" />
        <h2 className="galleryTitle">CIUDAD</h2>        
        <h2 className="galleryTitleII">Artículo de puente</h2>
        <p className="galleryTitleIII">Un puente es una construcción que permite salvar un accidente geográfico</p>
        <div className="articulos">
        <img src={Time} className="iconTime2" alt="reloj"/><p> Hace 2m</p>
        </div> 
      </div>
      <div className="galleryItemII">
        <img src={BlogImg3} alt="" className="galleryImg" />
        <h2 className="titleSubarticulo">Artículo de elefante</h2>
        <div className="subarticulos">
        <img src={Time} className="iconTime" alt="reloj"/><p> Hace 3h</p>
        </div> 
      </div>
      <div className="galleryItemII">
        <img src={BlogImg4} alt="" className="galleryImg" />
        <h2 className="titleSubarticulo">Artículo de loro</h2>
        <div className="subarticulos">
        <img src={Time} className="iconTime" alt="reloj"/><p> Hace 4h</p>
        </div> 
      </div>
      <div className="galleryItem">
        <img src={BlogImg2} alt="" className="galleryImg" />
        <h2 className="galleryTitle">AVENTURA</h2>        
        <h2 className="galleryTitleIV">Artículo de bosque</h2>
        <p className="galleryTitleV">Lugar poblado de árboles y arbustos. Área con una importante densidad de</p>
        <div className="articulos2">
        <img src={Time} className="iconTime3" alt="reloj"/><p> Hace 15m</p>
        </div> 
      </div>
      <div className="galleryItem artCamino">
        <img src={BlogImg5} alt="" className="galleryImg" />
        <h2 className="titleSubarticulo">Artículo de camino</h2>
        <div className="subarticulos">
        <img src={Time} className="iconTime" alt="reloj"/><p> Hace 8h</p>
        </div>        
      </div>
    </div>
  );
}

export default Blog;