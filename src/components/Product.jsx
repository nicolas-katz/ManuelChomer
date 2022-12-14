import React from 'react';
import styled from 'styled-components';
import {
    BsCheck2,
    BsCloudDownload
} from 'react-icons/all';
import Foto from '../assets/image6.jpg';
import Slider from './Slider';
import brochure from '../assets/brochure.pdf';

const StyledFirstDiv = styled.div`
    width: 100%;
    min-height: max-content;
    margin: 100px 0 40px 0;
    padding: 0 20px;
    padding-bottom: 40px !important;

    display: flex;
    flex-direction: column;

    & img {
        width: 100%;
        height: 400px;

        object-fit: cover;
    }

    & div {
        margin-bottom: 60px;

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

        & h4 {
            margin-top: 12px;

            color: black;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }

        & div {
            margin: 24px 0;

            & p {
                margin-bottom: 8px;

                &:last-child {
                    margin-bottom: 0;
                }

                display: flex;
                flex-direction: row;

                color: #838383;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;

                & span {
                    min-width: 18px;
                    min-height: 18px;
                    max-width: 18px;
                    max-height: 18px;
                    margin-top: 4px;
                    margin-right: 24px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid  #48da48;
                    border-radius: 50%;
                    
                    & svg {
                        color:  #48da48;
                        font-size: 12px;
                    }
                }
            }
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

                font-size: 22px;
            }

            &:hover {
                opacity: .7;

                color: white;
            }
        }
    }

    @media only screen and (min-width: 768px) {
       & img {
            height: 420px;
       }

        & div {
            & h3 {
                width: 50%;

                font-size: 48px;
                line-height: 58px;
            }

            & div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;

                & p {
                    width: 49%;
                    margin-bottom: 12px;

                    & span {
                        margin-right: 10px;
                    }
                }
            }
        }       
    }

    @media only screen and (min-width: 1024px) {       
       flex-direction: row;
       justify-content: space-between;

       & img {
        width: 50%;
        height: 700px;
       }

       & div {
        width: 45%;

        & h3 {
            width: 90%;

            font-size: 44px;
            line-height: 54px;
        }

        & div {
            width: 100%;
        }
       }
    }

    @media only screen and (min-width: 1200px) {  
        padding: 0 140px;

        & img {
            width: 55%;
            height: 740px;
        }

        & div {
            width: 40%;

            & h3 {
                width: 80%;
            }
        }
    }
`;

const StyledLastDiv = styled.div`
    width: 100%;
    height: max-content;
    margin-bottom: 40px;
    padding: 80px 20px;

    border-top: 1px solid gainsboro;

    & span {
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
            margin-bottom: 60px;

            color: black;
            font-size: 40px;
            line-height: 50px;
            font-weight: 500;
        }
    }

    @media only screen and (min-width: 768px)  {       
        & span {
            & h3 {
                width: 54%;

                font-size: 48px;
                line-height: 58px;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 80px 20px;

        & span {
            padding: 0;

            & h3 {
                width: 60%;
            }
        }
    }

    @media only screen and (min-width: 1200px) {       
        padding: 80px 200px;
    }
`;

export default function Product() {
  return (
    <div>
        <StyledFirstDiv
            id='productos'>
            <div>
                <h6>Productos</h6>
                <h3>Conoce nuestra <strong>micro vivienda</strong>.</h3>
                <h4>La micro vivienda Sol Home es una unidad monol??tica completa, que cumple con todas las especificaciones y necesidades de habitabilidad, seguridad, comodidad y confort habitacional.</h4>
                <div>
                    <p>
                        <span><BsCheck2 /></span>
                        Los modulos cuentan con aproximamente 26 m2.
                    </p>    
                    <p>
                        <span><BsCheck2 /></span>
                        Tienen un tiempo estimado de fabricaci??n de apenas 30 d??as.
                    </p>
                    <p>
                        <span><BsCheck2 /></span>
                        Ofrecen una soluci??n creativa y moderna a las necesidades habitacionales, logrando un ??ptimo uso del espacio con el que se cuenta.
                    </p>
                    <p>
                        <span><BsCheck2 /></span>
                        Un hogar confortable y funcional para sus necesidades, con lo m??s elemental sin sacrificar su comodidad.
                    </p>
                </div>
                <a href={brochure} target='_blank' rel="noopener noreferrer">
                    Brochure <BsCloudDownload />
                </a>
            </div>
            <img 
                src={Foto}
                alt="Sol Home - Micro Viviendas" 
            />
        </StyledFirstDiv>
        <StyledLastDiv
            id='galeria'>
            <span>
                <h6>Galer??a</h6>
                <h3>No son simples casas. Son mini casas <strong>Sol Home</strong>.</h3>
            </span>
            <Slider />
        </StyledLastDiv>
    </div>
  )
}