import React,{useState} from 'react';

export const ProductDetails = ({title,img,description,price,sku,stock}) => {
  const [cantidad, setCantidad] = useState(1)

  const sumarProducto = () => {
    setCantidad(cantidad+1)
  }

  const restarProducto = () => {
    setCantidad(cantidad-1)
  }

  const compra = useToast();

  function Comprar() {
    compra({
      title: 'Gracias por tu compra!',
      description: "Te enviamos un email con los detalles de tu compra.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <>    
    <div class="card mb-3">
        <img src={img} class="card-img-top" alt={title} />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">Descripción: {description}</p>
          <p class="card-text"><small class="text-body-secondary">SKU: SKU: {sku}</small></p>
          <p class="card-text">Precio: {price}</p>
          <p class="card-text"><small class="text-body-secondary">Cantidad disponible: {stock}</small></p>

          <p class="card-text">Cantidad a comprar: {cantidad}</p>
          <button type="button" class="btn btn-danger" onClick={restarProducto} isDisabled={cantidad==1?true:false}>Quitar</button>
          <button type="button" class="btn btn-success" onClick={sumarProducto} isDisabled={cantidad>=stock?true:false}>Agregar</button>          

          <a href="#" class="btn btn-primary" onClick={Comprar}>Comprar</a>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>
    </>
  );
}