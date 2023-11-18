import React, { useEffect, useState } from "react";
import { productos } from "../Utils/Database";
import "./Carrousel.css";

export const Carrousel = () => {
  const categorias = Object.keys(productos); // obtener categorias[]
  const rnd = (
    // Funcion random con min, max
    max = 10,
    min = 0
  ) => Math.floor(Math.random() * (max - min)) + min;
  const prodRnd = () => {
    // Funcion producto random {}
    let catRnd = categorias[rnd(categorias.length)]; // categoria random
    return productos[catRnd][rnd(productos[catRnd].length)]; // prod random en categoria
  };

  // todo: revisar esto para que no hayan repeticiones
  // let productosRnd = [prodRnd(), prodRnd(), prodRnd()];
  const [productosRnd, setproductosRnd] = useState([])
  console.log('ProductosRnd:', productosRnd)

  // const cargarProductosRnd = () => {
  //   setproductosRnd([prodRnd(), prodRnd(), prodRnd()]);
  // };

  // todo: revisar esto
  useEffect( () => {
    setproductosRnd([prodRnd(), prodRnd(), prodRnd()]);
  }, [])

  return (
    <>
      {/* Carousel */}
      <div
        id={"demo"+rnd(100)}
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Indicadores de carrusel */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* presentacion carrusel */}
        <div className="carousel-inner">
          {/* iteracion sobre productosRnd[] para crear diapositivas (solo 3?) */}
          {productosRnd.map((e, i) => (
            <div key={i} className={i == 0 ? "carousel-item active" : "carousel-item"}>
              <img src={e.img} alt={e.titulo} className="d-block " />
              <div className="carousel-caption  d-md-block">
                <p>{e.descripcion}</p>
                <h1>{e.titulo}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* controles carrusel derecha/izquierda */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};
