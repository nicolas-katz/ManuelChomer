import React from 'react';
import styled from 'styled-components';
import Foto from '../assets/main.jpg';
import {
    BsTelephone
} from 'react-icons/all';

const StyledAbout = styled.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px;

    display: flex;
    flex-direction: column-reverse;

    & div:first-child {
        width: 100%;
        height: 360px;
        margin-top: 60px;
        
        & img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    & div:last-child {
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

        & h3 {
            color: black;
            font-size: 40px;
            line-height: 50px;
            font-weight: 400;
        }

        & p {
            margin: 20px 0 30px 0;

            color: #838383;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }

        & a {
            width: max-content;
            height: 54px;
            padding: 0 28px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: var(--colorPrincipal);
            border-radius: 40px;
            transition: all .6s;

            color: white;
            font-size: 18px;
            font-weight: 400;
            text-decoration: none;

            & svg {
                margin-left: 16px;
            }

            &:hover {
                opacity: .7;

                color: white;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 80px 20px 0 20px;
    }

    @media only screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & div:first-child {
            width: 45%;
            height: 500px;
            margin-top: 0;
        }

        & div:last-child {
            width: 45%;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 80px 200px 0 200px;
    }
`;

export default function About() {
  return (
    <StyledAbout
        id='compania'>
        <div>
            <img 
                src={Foto} 
                alt='Sol Home - Micro Viviendas' 
            />
        </div>
        <div>
            <h6>Compañía</h6>
            <h3>Tu empresa de <strong>confianza</strong>.</h3>
            <p>
                Sol Home es una empresa dedicada a la fabricación y comercialización de Micro Viviendas modulares, las cuales se caracterizan por su alta calidad de estructura y diseño, por su poco tiempo de fabricación y por la oportunidad económica que representa.
                Dedicados toda la vida a la construcción, comenzamos esta nueva etapa con el deseo de abastecer espacios habitacionales óptimos para vivir y disfrutar.            
            </p>
            <a href="#contacto">Conoce más <BsTelephone /></a>
        </div>
    </StyledAbout>
  )
}