import React from "react";
import './Contact.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Contact(){
    function submitContact(){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Consulta enviada!!',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return(
        <div className="contact__container">
            <div className="contact__data">
                <h1 className="contact__title">CONTACTANOS!</h1>
                <form action="" className="contact__form">
                    <div className="contact__input__container">
                        <span className="input__title">NOMBRE</span>
                        <input type="text" name="name" id="1"  placeholder="INGRESE SU NOMBRE..." className="form__input"/>
                    </div>
                    <div className="contact__input__container">
                        <span className="input__title">APELLIDO</span>
                        <input type="text" name="surname" id="1"  placeholder="INGRESE SU APELLIDO..." className="form__input"/>
                    </div>
                    <div className="contact__input__container">
                        <span className="input__title">CORREO ELECTRÓNICO</span>
                        <input type="email" name="email" id="1"  placeholder="INGRESE SU CORREO ELECTRÓNICO..." className="form__input"/>
                    </div>

                    <div className="contact__input__container">
                        <span className="input__title">CONTANOS TUS DUDAS</span>
                        <textarea type="email" name="email" id="1"  placeholder="Escribe tu mensaje..." className="form__input"/>
                    </div>
                </form>
                <Link to="/" className="form__submit" onClick={submitContact}>ENVIAR</Link>
            </div>
        </div>
    );
};

export default Contact;