import React from "react";
import "../App.css";
import Contador from "./ItemCount";
function ItemList(props) {
  return (
    <>
      <h1
        style={{
          color: "white",
          font: "70",
          textAlign: "center",
          margin: "1.5rem 0 1rem 0",
        }}
      >
        {props.title}
      </h1>
      <section className="flexPelicula">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio1.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio I : La amenza fantasma</h5>
            <p className="card-text">
              <Contador stock="5" initial="1" />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio2.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio II : La guerra de los clones</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio3.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio III : La Venganza de los Sith</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio4.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio IV : Una nueva esperanza</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio5.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio V : El imperio contrataca</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio6.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio VI : El retorno del Jedi</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio7.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio VII : El despertar de la fuerza</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio8.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio VIII : Los ultimos Jedi</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/episodio9.jpeg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Episodio IX : El ascenso de Skywalker</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/rogueone.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Rogue One: Una historia de Star Wars</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../imagenes/peliculas/solomovie.jpg")}
            className="card-img-top"
            alt="ERROR"
          />
          <div className="card-body">
            <h5 className="card-title cardPelicula">Han Solo</h5>
            <p className="card-text">
              <Contador />
            </p>
            <p className="cardPelicula">$500</p>
            <a href="#" className="btn btn-primary">
              Agregar al Carrito
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ItemList;

//  <div className="card" style={{ width: "18rem" }}>
//         <img
//           src={require("../imagenes/peliculas/episodio3.jpg")}
//           className="card-img-top"
//           alt="ERROR"
//         />
//         <div className="card-body">
//           <h5 className="card-title cardPelicula">Episodio III : La Venganza de los Sith</h5>
//           <p className="card-text">
//             <Contador />
//           </p>
//           <a href="#" className="btn btn-primary">
//             Agregar al Carrito
//           </a>
//         </div>
//       </div>
