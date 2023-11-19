import React from "react";
import "./SeguinosEn.css";

export const SeguinosEn = () => {
  return (
    <div>
      <div class="seguinos_en d-flex align-items-center justify-content-center">
        <div className="col-10 d-flex justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center mt-2 mx-0">
              <h2>Seguinos en:</h2>
            </div>
            <div className="mx-3">
              <img src="/src/assets/iconos/Facebook.png" alt="fb" />
            </div>
            <div className="mx-3">
              <img src="/src/assets/iconos/Instagram.png" alt="ig" />
            </div>
            <div className="mx-3">
              <img src="/src/assets/iconos/X.png" alt="x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
