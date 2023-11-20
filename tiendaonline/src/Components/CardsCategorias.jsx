import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardsCategorias.css";
import { productos } from "../Utils/Database";

// obtener categorias[ {'titulo':'...' , 'img_url':'...'}, ... ]
const categorias = Object.keys(productos).map((e) => ({
  titulo: e,
  img_url: productos[e][0].img,
}));

export const CardsCategorias = () => {
  const [catgs, setCatgs] = useState(Object.keys(productos));

  useEffect(() => {
    setCatgs(Object.keys(productos));
  }, []);

  const CardCategoria = ({ cat, derecha }) => {
    let der = derecha ? " justify-content-end text-end " : "";

    return (
      <div className="col-12 col-sm-6 col-md-6 my-4 ">
        <div
          className={
            "card_categoria mx-1 px-5 d-flex flex-grow-1 align-items-center text-capitalize " +
            der
          }
          style={{
            backgroundImage: `url(${cat.img_url})`,
          }}
        >
          <div>
            <h1 className={der}>{`${cat.titulo}`}</h1>
            <Link to={"/"}>
              <button>ver categoria</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ContenedorCardsCategorias = ({ children }) => {
    return (
      <div className="container-fluid">
        <div className="row cards_categorias mx-0 my-3">
          <CardCategoria cat={categorias[0]} />
          <CardCategoria cat={categorias[1]} derecha={1} />
        </div>
      </div>
    );
  };

  return <ContenedorCardsCategorias />;
};
