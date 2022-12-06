import React, { useRef } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import {
    BsWhatsapp,
    AiOutlineMail,
    BsTelephone,
    FiMapPin
} from 'react-icons/all';

const StyledContact = styled.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px;

    display: flex;
    flex-direction: column;

    background-color: white;
    border-top: 1px solid gainsboro;

    & h6 {
        width: max-content;
        height: max-content;
        margin-bottom: 12px;
        padding: 6px 12px;

        background-color: var(--colorRGBA);
        border-radius: 40px;

        color:  var(--colorPrincipal);
        font-size: 16px;
        font-weight: 500;
    }

    & h2 {
        color: black;
        font-size: 42px;
        line-height: 52px;
        font-weight: 500;
    }

    & p {
        margin-top: 20px;

        transition: all .6s;

        color: gray;
        font-size: 18px;
        line-height: 28px;
        font-weight: 300;
    }

    & span {
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        & a {
            width: max-content;
            height: 48px;
            margin: 4px;
            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 40px;

            color: white;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;

            & svg {
                margin-right: 8px;
            }

            &:first-child {
                background-color: #48da48;
            }

            &:nth-child(2n) {
                background-color: #d13d3d;
            }

            &:nth-child(3n) {
                background-color: #480861;
            }

            &:last-child {
                background-color: #e68647;
            }
        }
    }

    & form {
        width: 100%;
        height: max-content;
        margin-top: 60px;

        display: flex;
        flex-direction: column;

        & label {
            color: black;
            font-size: 16px;
            font-weight: 300;
        }

        & input,
        & textarea,
        & button {
            width: 100%;
            height: 54px;
            margin-top: 6px;
            margin-bottom: 20px;
            padding: 0 20px;

            background-color: white;
            border: 1px solid #b9b9b9;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 16px;
            font-weight: 300;

            &::placeholder {
                color: gray;
            }
        }

        & textarea {
            height: 140px;
            padding-top: 20px;
        }

        & input,
        & textarea {
            &:out-of-range {
                border-color: red;
            }

            &:focus {
                &:invalid {
                    border-color: red;
                }
            }

            &:in-range,
            &:not(:empty),
            &:valid {
                border-color: #48da48;
            }
        }

        & div.InputRadioDiv {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;

            & div {
                & div {
                    margin-top: 8px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    & label {
                        color: #838383;
                        font-size: 16px;
                    }

                    & input {
                        width: 18px;
                        height: 18px;
                        margin: 0;
                        margin-right: 6px;
                    }
                }
            }
        }

        & button {
            width: max-content;
            margin-top: 0;
            margin-bottom: 0;
            padding: 0 40px;

            background-color: var(--colorPrincipal);
            border-color: var(--colorPrincipal);
            border-radius: 40px;

            color: white;
            font-size: 18px;
            font-weight: 400;

            &:hover {
                opacity: .7;

                color: white;
            }

            &.sendMail {
                background-color: #48da48;
                border-color: #48da48;
            }
        }
    }

    @media only screen and (min-width: 425px) {
        & h2 {
            width: 95%;
        }
    }

    @media only screen and (min-width: 540px) {
        & h2 {
            width: 80%;

            font-size: 48px;
            line-height: 58px;
        }
    }

    @media only screen and (min-width: 768px) {
        & h2 {
            width: 60%;

            font-size: 50px;
            line-height: 60px;
        }

        & form {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            & div {
                width: 48%;

                display: flex;
                flex-direction: column;

                &.TextAreaDiv {
                    width: 100%;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & h2 {
            width: 50%;

            font-size: 52px;
            line-height: 62px;
        }
    }    

    @media only screen and (min-width: 1200px) {
        padding: 80px 200px;  
    }
`;

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e6bwg0p', 'template_qp5qslq', form.current, 'hwH8wj1eN-3bQW7te')
            .then(() => {
                document.querySelector("form button").classList.add("sendMail");
                document.querySelector("form button").innerHTML = `Enviado`;

                setTimeout(()=> {
                    location.reload();
                }, 2500)
            }, (error) => {
                console.log(error.text);
            })
    };

    return (
        <StyledContact 
            id='contacto'>
            <h6>Contacto</h6>
            <h2>Coordina tu visita en Sol Home.</h2>
            <p>
                Te invitamos a conocer tu próxima vivienda para comprobar la alta calidad constructiva. Contactanos en cualquiera de nuestros medios de comunicación o llena el siguiente formulario y nuestro equipo se pondra en contacto con vos para responder todas tus dudas.
            </p>
            <span>
                <a 
                    href="https://api.whatsapp.com/send?phone=+5491141403663&text=¡Hola%20Sol%20Home!%20Quiero%20más%20información%20acerca%20de%20la%20micro%20vivienda." 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <BsWhatsapp /> 
                    Whastapp
                </a>
                <a 
                    href="mailto:solhomearg@gmail.com">
                    <AiOutlineMail />
                    Email
                </a>
                <a 
                    href="tel:+5491141403663">
                    <BsTelephone />
                    Teléfono
                </a>
                <a 
                    href="https://goo.gl/maps/56xMuLBH1Sko2VwV7" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    <FiMapPin/>
                    Showroom
                </a>
            </span>
            <form 
                ref={form}
                onSubmit={sendEmail}>
                <div>
                    <label 
                        htmlFor="name">
                        Nombre completo
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Nombre completo"
                        minLength="4"
                        maxLength="30"
                        required 
                    />
                </div>
                <div>
                    <label 
                        htmlFor="phone">
                        Teléfono
                    </label>
                    <input 
                        type="tel" 
                        name="phone" 
                        id="phone" 
                        placeholder="Teléfono"
                        minLength="8"
                        maxLength="20"
                        required 
                    />
                </div>
                <div>
                    <label 
                        htmlFor="email">
                        Email
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email"
                        placeholder="Email"
                        minLength="6"
                        maxLength="48"
                        required 
                    />
                </div>
                <div className='InputRadioDiv'>
                    <label
                        htmlFor='contact'>
                        Elegi tu forma de contacto
                    </label>
                    <div>
                        <div>
                            <input type="radio" name="contact" id="whatsapp" value="Whatsapp" required />
                            <label htmlFor="wsp">Whatsapp</label>
                        </div>
                        <div>
                            <input type="radio" name="contact" id="mail" value="Email" required />
                            <label htmlFor="mail">Email</label>
                        </div>
                    </div>
                </div>
                <div className='TextAreaDiv'>
                    <label 
                        htmlFor="message">
                        Mensaje
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        placeholder="Mensaje"
                        minLength="6"
                        maxLength="240"
                        required
                    ></textarea>
                </div>
                <button 
                    type='submit'>
                    Enviar
                </button>
            </form>
        </StyledContact>
    )
}