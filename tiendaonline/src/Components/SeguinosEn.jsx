import React from "react";
import "./SeguinosEn.css";

export const SeguinosEn = () => {
  return (
    <>
      <div class="seguinos_en d-flex align-items-center justify-content-center">
        <div className="col-11 d-flex justify-content-center">
          <div className="col d-flex justify-content-center">
            <div className="row align-items-center ">
              <h2 className="col-xss-12 col-sm-6 text-sm-end text-center">Seguinos en:</h2>
              <div className="col-xss-12  col-sm-6 d-flex justify-content-center">
                <div className="ps-4">
                  <img src="/src/assets/iconos/Facebook.png" alt="fb" />
                </div>
                <div className="ps-4">
                  <img src="/src/assets/iconos/Instagram.png" alt="ig" />
                </div>
                <div className="ps-4">
                  <img src="/src/assets/iconos/X.png" alt="x" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
