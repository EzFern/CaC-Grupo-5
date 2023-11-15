import React,{useState} from 'react';

export const DetallesProducto = ({title,img,description,price,sku,stock}) => {
  const [cantidad, setCantidad] = useState(1)

  const sumarProducto = () => {
    setCantidad(cantidad+1)
  }

  const restarProducto = () => {
    setCantidad(cantidad-1)
  }

  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }

  return (
    <>    
    <div class="card mb-3">
        <img src={img} class="card-img-top" alt={title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Descripción: {description}</p>
          <p class="card-text"><small class="text-body-secondary">SKU: {sku}</small></p>
          <p class="card-text">Precio: {price}</p>
          <p class="card-text"><small class="text-body-secondary">Cantidad disponible: {stock}</small></p>
          
          <p class="card-text">Cantidad a comprar: {cantidad}</p>
          <div className="card-body d-flex justify-content-center gap-2">
            <button type="button" class="btn btn-danger" onClick={restarProducto} isDisabled={cantidad==1?true:false}>Quitar</button>
            <button type="button" class="btn btn-success" onClick={sumarProducto} isDisabled={cantidad>=stock?true:false}>Agregar</button>          
          </div>         
          <div className="card-body d-flex justify-content-center gap-2">
            <button type="button" class="btn btn-primary" id="liveToastBtn">Comprar</button>

            <div class="toast-container position-fixed bottom-0 end-0 p-3">
              <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                  {/* <img src="..." class="rounded me-2" alt="..."/> */}
                  <strong class="me-auto">Compra registrada</strong>
                  <small>Tienda Grupo 5</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                  Gracias por tu compra!
                </div>
              </div>
            </div>

            <a href="#" class="btn btn-primary">Agregar al carrito</a>
          </div>
        </div>
    </div>
    </>
  );
}