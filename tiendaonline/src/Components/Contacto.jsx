import React,{useState} from 'react'
import './Contacto.css'

export const Contacto = () => {  
    const [values, setValues] = useState({
      name: "",
      lastName: "",
      email: "",
      message: "",
    });
  
    const [formSubmitted, setFormSubmitted] = useState(false);
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    const handleForm = (event) => {
      event.preventDefault();
      //aqui iria la validación
      console.log(values);
      setFormSubmitted(true);
    };
  
    return (
      <div className="divForm">
        {formSubmitted ? (
          <p className="messageSubmit">
            MENSAJE ENVIADO <br />
            ¡MUCHAS GRACIAS!
          </p>
        ) : (
          <form onSubmit={handleForm}>
            <h1>Contactanos!</h1>
            <h4>
              Tus sugerencias son importantes para seguir creciendo y brindar la
              mayor calidad tanto en nuestros productos como en nuestro servicio.
            </h4>
            <input
              type="text"
              name="name"
              value={values.name}
              placeholder="Nombre"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              placeholder="Apellido"
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="email"
              value={values.email}
              placeholder="Email"
              onChange={handleInputChange}
              required
            />
            <textarea
              type="text"
              name="message"
              value={values.message}
              placeholder="Mensaje"
              onChange={handleInputChange}
              required
            />
            <button className="buttonForm" type="submit">
              ENVIAR
            </button>
          </form>
        )}
      </div>
    );  
}
