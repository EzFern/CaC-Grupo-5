import React from "react";
import "./AcercaDe.css";
import logoReact from "/assets/react.svg";
import logoVite from "/vite.svg";

const integrantes = [
  { nombre: "Melisa Romina Samanta Herrera Fernández" },
  { nombre: "Norma Emilce	Valdez" },
  { nombre: "Verónica Lucía	Bodeman" },
  { nombre: "Roxana Edith	Barberis" },
  { nombre: "Romina	Ascurra" },
  { nombre: "Pablo Costa" },
  { nombre: "Eduardo Joaquin Pinto Villegas" },
  { nombre: "Ezequiel Alexis Fernandez" },
  { nombre: "Fernando	Juárez Data" },
  { nombre: "Jorge Esteban Femenia" },
  { nombre: "Fabian	Zandri" },
  { nombre: "Damian	Ottone" },
  { nombre: "Rafael Ricardo	Strongoli" },
];

export const AcercaDe = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row cards_categorias mx-0 my-3 text-left">
          <h2>Acerca de FastFood5</h2>
          <p>
            ¡Bienvenido a nuestra aplicación de tienda online desarrollada con
            React! Este proyecto representa la culminación de nuestros esfuerzos
            para aplicar y consolidar los conocimientos adquiridos durante
            nuestro estudio en el curso de React de Codo a Codo. Nuestra
            aplicación de tienda online está diseñada para proporcionar a los
            usuarios una experiencia de compra fluida y atractiva. Hemos
            integrado los principios fundamentales de React para construir una
            interfaz de usuario dinámica y altamente interactiva, permitiendo a
            los clientes explorar fácilmente productos, agregarlos al carrito de
            compras y realizar transacciones de manera eficiente.
          </p>
          <div className="text-center">
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
          </div>
          <h2>Características Destacadas:</h2>
          <p>
            <strong>Componentización Avanzada: </strong>Hemos desglosado la
            aplicación en componentes reutilizables, lo que facilita la gestión
            y escalabilidad del código. Cada parte de la aplicación, desde la
            barra de navegación hasta los elementos individuales del catálogo de
            productos, se ha implementado como un componente React
            independiente.
          </p>
          <p>
            <strong>Enrutamiento con React Router: </strong>
            Se implementó un enrutamiento eficaz con React Router, permitiendo
            una navegación suave entre las diferentes secciones de la tienda.
            Los clientes pueden explorar categorías, ver detalles de productos y
            acceder fácilmente al carrito de compras y otras secciones.
          </p>
          <p>
            <strong>Interactividad con Hooks de React: </strong>
            Aprovechamos los Hooks de React para incorporar interactividad en
            nuestra aplicación. Desde el manejo de eventos hasta la gestión del
            ciclo de vida de los componentes, los Hooks han mejorado la
            funcionalidad y la respuesta del usuario.
          </p>
          <div className="text-center">
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
          </div>
          <h2>Gestión de Proyecto:</h2>
          <p>
            Durante el desarrollo, utilizamos herramientas colaborativas clave
            para mejorar la eficiencia y la coordinación del equipo. GitHub fue
            nuestra plataforma central para el control de versiones,
            permitiéndonos colaborar de manera efectiva y realizar un
            seguimiento detallado de los cambios en el código. Además, Trello
            fue fundamental para la gestión de tareas y la planificación,
            asegurando una ejecución sin problemas del proyecto.
          </p>
          <h2>Desafíos Superados:</h2>
          <p>
            Durante el desarrollo, enfrentamos varios desafíos que fortalecieron
            nuestra comprensión de React. La gestión del estado, la
            sincronización de datos y la optimización del rendimiento fueron
            áreas clave en las que aplicamos técnicas avanzadas para superar
            obstáculos y mejorar la eficiencia de la aplicación.
          </p>
          <h2>Aprendizaje Continuo:</h2>
          <p>
            Este proyecto no solo representa el resultado de nuestros
            conocimientos actuales, sino también el comienzo de un viaje
            continuo de aprendizaje. La tecnología está en constante evolución,
            y estamos comprometidos a seguir explorando nuevas características y
            mejores prácticas en el desarrollo con React. En resumen, nuestra
            aplicación de tienda online no solo es un escaparate de productos,
            sino también una muestra tangible de nuestra capacidad para aplicar
            los principios de React en un entorno del mundo real. Esperamos que
            disfrutes explorando y experimentando con nuestra tienda online
            tanto como nosotros disfrutamos creándola. ¡Gracias por ser parte de
            nuestro viaje en el emocionante mundo de React!
          </p>
          <div className="text-center">
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
            <img className="logo logo-spin" src={logoReact} alt="" />
          </div>
          <h2 className="text-center">Integrantes</h2>
          <ul className="text-center">
            {integrantes
              .sort((a, b) => 0.5 - Math.random())
              .map((e, i) => (
                <li key={i}>
                  {e.nombre} {e.email}
                </li>
              ))}
          </ul>
          <div className="text-center">
            <img className="logo logo-spin" src={logoVite} alt="" />
            <img className="logo logo-spin" src={logoReact} alt="" />
            <img className="logo logo-spin" src={logoVite} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
