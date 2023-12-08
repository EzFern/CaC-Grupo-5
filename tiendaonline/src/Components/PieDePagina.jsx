import React from "react";
import { Link } from "react-router-dom";
import "./PieDePagina.css";

import logoUrl from "/assets/iconos/Logo.png";

export const PieDePagina = () => {
  return (
    <>
      <div className="container-xl piedepagina">
        <div className="row px-3">
          <div className="col-sm-6 col-md-4 pb-4">
            <Link to={`/como-comprar`}>
              <h4 className="my-1 text-uppercase">como comprar</h4>
            </Link>
            <Link to={`/preguntas-frecuentes`}>
              <div>Preguntas frecuentes</div>
            </Link>
            <Link to={`/bases-y-condiciones`}>
              <div>Bases y condiciones</div>
            </Link>
            <Link to={`/acerca-de`}>
              <div className="my-1 text-uppercase">acerca de</div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-4 pb-4">
            <Link to={`/contacto`}>
              <h4 className="my-1 text-uppercase">contacto</h4>
            </Link>

            <div>Tel. (549) 15 01230456</div>
            <div>mail@fastfoodfive.com.ar</div>
            <div>Av. Libertador 1562 - CABA</div>
          </div>
          <div className="col-sm-6 col-md-4 pb-4 pr-1">
            <Link to="/">
              <img
                className="nav-logo-img"
                src={logoUrl}
                alt="Fast Food 5"
              />
            </Link>
          </div>
        </div>
        <div className="row px-3 pb-3">
          <div className="col-10 ">
            © Copyright Fast Food 5. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </>

    // <>
    //   <div className="piedepagina ">
    //     <div className="row ">
    //       <div className="col-sm  px-3">
    //       {/* <div className="col-3 col-s-6 pl-1 d-flex justify-content-center"> */}
    //         {/* <div className=""> */}
    //           <h4 className="my-1 text-uppercase">como comprar</h4>
    //           <div>Preguntas frecuentes</div>
    //           <div>Bases y condiciones</div>
    //         {/* </div> */}
    //       </div>

    //       <div className="col-sm  px-3">
    //         {/* <div className=""> */}
    //           <h4 className="my-1 text-uppercase">contacto</h4>
    //           <div>Tel. (549) 15 01230456</div>
    //           <div>mail@fastfoodfive.com.ar</div>
    //           <div>Av. Libertador 1562 - CABA</div>
    //         {/* </div> */}
    //       </div>

    //       <div className="col-sm  px-3">
    //         {/* <div className=""> */}
    //           <Link to="/">
    //             <img
    //               className="nav-logo-img"
    //               src="/assets/iconos/Logo.png"
    //               alt="Fast Food 5"
    //             />
    //           </Link>
    //         {/* </div> */}
    //       </div>
    //     </div>

    //     {/* <div className="row">
    //       <div className="col-10 ">
    //         © Copyright Fast Food 5. Todos los derechos reservados.
    //       </div>
    //     </div> */}
    //   </div>
    // </>

    // <div className="d-flex justify-content-center db-danger">

    //   <footer className="container-lg piedepzzzzzzagina text-center">
    //     <div className="container-fluid">
    //       <div className="row">
    //         <div className="col-md-3 col-sm-6">
    //           <div className="widget_text">
    //             <Link to={`/contacto`}><p className="widget-title"><span>Contacto</span></p></Link>
    //             <div className="textwidget">
    //               <p>Av. Libertador 1562 - CABA <br></br> <a href="tel:549 01230456">Tel. (549) 15 01230456</a> <br></br> <a href="mailto:mail@fastfoodfive.com.ar">mail@fastfoodfive.com.ar</a>  </p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-3 col-sm-6">
    //           <div className="widget_text">
    //             <p className="widget-title"><span>Formas de Pago</span></p>
    //             <div className="textwidget">
    //             <p>Efectivo o transferencia bancaria.</p>
    //             <Link to={`/como-comprar`}><p>COMO COMPRAR</p></Link>
    //             <Link to={`/preguntas-frecuentes`}><p>Preguntas frecuentes</p></Link>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-3 col-sm-6">
    //           <div className="widget_text">
    //             <p className="widget-title"><span>ENVIOS</span></p>
    //             <div className="textwidget"><p>Ventas: Lunes a viernes - 8 a 20hs.</p>
    //               <p>Entrega de pedidos: Lunes a viernes - 9 a 23hs.</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="col-md-3 col-sm-6">
    //           <div className="widget_text widget_custom_html">
    //               <p>© Copyright Fast Food 5. </p><br></br><p> Todos los derechos reservados.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
};

{
  /* //  <div className="d-flex justify-content-center db-danger">
    //     <div className="piedepagina container text-center">
    //         <div className="row">
    //           <div className='col'>
    //             <p>COMO COMPRAR</p>
    //             <p>Preguntas frecuentes</p>
    //             <p>Bases y condiciones</p>
    //           </div>
    //           <div className='col'>
    //             <p>CONTACTO</p>
    //               <p> 549 01230456   </p>
    //             <p>mail@fastfoodfive.com.ar</p>
    //             <p>Av. Libertador 1562 - CABA </p>
    //           </div>
    //         </div>
    //     </div>
    //  </div> */
}
