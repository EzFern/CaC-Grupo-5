import React, { useEffect, useState } from "react";
import { productos } from "../Utils/Database";
import "./Carrousel.css";

export const Carrousel = () => {
  const categorias = Object.keys(productos); // obtener categorias[]
  // Funcion random con min, max
  const rnd = (max = 10, min = 0) =>
    Math.floor(Math.random() * (max - min)) + min;
  // Funcion producto random {}
  const prodRnd = () => {
    let catRnd = categorias[rnd(categorias.length)]; // categoria random
    return productos[catRnd][rnd(productos[catRnd].length)]; // prod random en categoria
  };
  const idCarousel = "carousel" + rnd(100); // id de carrousel aleatorio
  const [productosRnd, setproductosRnd] = useState([]);

  useEffect(() => {
    setproductosRnd([prodRnd(), prodRnd(), prodRnd()]);
  }, []);

  const CarouselItem = (props) => {
    const act = props?.id === 0 || !props?.id ? `active` : ``;
    const imgurl = props?.producto?.img || "sin img";
    const titulo = props?.producto?.titulo || "sin titulo";
    const desc = props?.producto?.descripcion || "sin descripcion";
    return (
      <div
        className={"carousel-item " + act}
        style={{ backgroundImage: `url(${imgurl})` }}
      >
        <div className="carousel-caption text-break position-relative text-start start-0 top-0  px-4 py-4 my-4 mx-5">
          <p className="fs-4 text-capitalize">{desc}</p>
          <h1 className="text-uppercase">
            <b>{titulo}</b>
          </h1>
        </div>
      </div>
    );
  };

  const CarrouselButton = (props) => {
    const btType = props?.type ? "next" : "prev";
    return (
      <button
        className={"carousel-control-" + btType}
        type="button"
        data-bs-target={"#" + idCarousel}
        data-bs-slide={btType}
      >
        <span className={"carousel-control-" + btType + "-icon"}></span>
      </button>
    );
  };

  // Carousel
  return (
    <div
      id={idCarousel}
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {productosRnd.map((e, i) => (
          <CarouselItem key={i} producto={e} />
        ))}
      </div>
      <CarrouselButton />
      <CarrouselButton type={1} />
    </div>
  );
};
