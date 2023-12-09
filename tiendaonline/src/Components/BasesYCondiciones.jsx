import React from "react";
import { Link } from "react-router-dom";

export const BasesYCondiciones = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row cards_categorias mx-0 my-3 text-left">
          <h2>Bases y Condiciones de Uso de la Tienda Online “FastFood5”</h2>
          <p>
            Bienvenido a FastFood5, su tienda en línea especializada en la venta
            de alimentos. Al utilizar nuestro sitio web y realizar pedidos a
            través de él, usted acepta las siguientes bases y condiciones:
          </p>
          <p>
            <strong>a. Registro de Cuenta:</strong> Para hacer un pedido, es
            necesario que se registre con una cuenta válida, proporcionando
            información veraz y actualizada.
          </p>
          <p>
            <strong>b. Realización de Pedidos: </strong>Puede seleccionar los
            productos que desee comprar y añadirlos al carrito. La
            concretización de la compra se realizará al seleccionar un método de
            pago y confirmar el pedido.
          </p>
          <p>
            <strong>c. Disponibilidad de Productos:</strong> La disponibilidad
            de nuestros productos está sujeta al stock existente. En caso de
            falta de disponibilidad después de realizado el pedido, le
            informaremos para ofrecer un producto alternativo o cancelar el
            pedido.
          </p>
          <p>
            <strong>d. Precios y Pago:</strong> Los precios de nuestros
            productos son los que se muestran en la página al momento de
            realizar el pedido y pueden estar sujetos a cambios sin previo
            aviso. El pago debe realizarse a través de los métodos aceptados por
            la tienda y se confirmará el pedido una vez que se haya verificado
            el pago.
          </p>
          <p>
            <strong>e. Entrega: </strong>La entrega se realizará en la
            dirección especificada durante el proceso de compra. Los tiempos de
            entrega son estimativos y cualquier demora no resultará en
            indemnización o cancelación del pedido.
          </p>
          <p>
            <strong>f. Cancelación y Devolución:</strong> Las cancelaciones o
            devoluciones podrán realizarse de acuerdo con nuestra política de
            cancelaciones y devoluciones. Los pedidos solo pueden cancelarse
            antes de su despacho.
          </p>
          <p>
            <strong>g. Privacidad y Seguridad:</strong> Nos comprometemos a
            proteger su privacidad y seguridad de su información personal de
            acuerdo con nuestra política de privacidad.
          </p>
          <p>
            <strong> h. Modificación de las Bases y Condiciones: </strong>
            FastFood5 se reserva el derecho de modificar estas bases y
            condiciones en cualquier momento. Es responsabilidad del usuario
            revisarlas periódicamente.
          </p>
          <p>
            <strong>i. Ley Aplicable: </strong>Estas bases y condiciones se
            rigen por la ley del país/jurisdicción en la que opera FastFood5, y
            cualquier disputa estará sujeta a la jurisdicción exclusiva de sus
            tribunales.
          </p>
          <p>
            Para consultas o más información, por favor diríjase a{" "}
            <Link to="/contacto">contácto.</Link>
          </p>
        </div>
      </div>
    </>
  );
};
