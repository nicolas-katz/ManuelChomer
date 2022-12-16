import React from 'react';
import styled from 'styled-components';
import {
    BsChevronDown,
    AiOutlineStar,
    FiFastForward,
    IoKeyOutline,
    MdAttachMoney,
    BiGridAlt,
    BsSun,
    BsTruck,
    AiOutlineSafety
} from 'react-icons/all';

const StyledBenefits = styled.div`
    width: 100%;
    padding: 80px 20px;

    display: flex;
    flex-direction: column;

    background-color: black;

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
        color: white;
        font-size: 40px;
        line-height: 50px;
        font-weight: 400;

        & span {
            text-decoration: underline;
        }
    }

    & div {
        width: 100%;
        margin-top: 40px;

        display: flex;
        flex-direction: column;

        & div {
            display: flex;
            flex-direction: column;
            margin-top: 24px;
            padding-bottom: 24px;

            border-bottom: 1px solid #ffffff45;

            &:last-child {
                margin-bottom: 0;
                padding-bottom: 0;

                border-bottom: none;
            }

            & div {
                margin: 0;
                padding: 0;

                display: flex;
                flex-direction: row;
                align-items: center;

                border: none;

                & svg {
                    color: var(--colorPrincipal);
                    font-size: 32px;
                }

                & span {
                    width: 100%;
                    
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    & h4 {
                        width: 100%;
                        margin-left: 28px;

                        color: white;
                        font-size: 24px;
                        font-weight: 400;
                    }

                    & svg {
                        color: gainsboro;
                        font-size: 18px;
                    }
                }
            }

            & p {
                height: 0;

                visibility: hidden;

                color: gainsboro;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }

            &.active {
                & div {
                    & span svg {
                        transform: rotate(180deg);
                    }
                }

                & p { 
                    height: max-content;
                    margin-top: 20px;
                    
                    visibility: visible;
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & h3 {
            width: 60%;

            font-size: 44px;
            line-height: 54px;
        }

        .benefits__container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            .benefits__box {
                width: 45%;

                &:last-child {
                    padding-bottom: 24px;
                    
                    border-bottom: 1px solid #ffffff45;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 100px 20px;

        & h3 {
            width: 50%;

            font-size: 48px;
            line-height: 58px;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 100px 140px;

        & h3 {
            width: 70%;
            
            font-size: 50px;
            line-height: 60px;
        }
    }
`;

export default function Benefits() {
    const handleOpen = (e) => {
        document.querySelectorAll(".benefits__container .benefits__box").forEach((element) => { 
            if(element == e.target.parentNode.parentNode.parentNode) {
                element.classList.toggle('active');
            } else {
                element.classList.remove('active');
            }
        })
    };

    return (
        <StyledBenefits
            id='beneficios'>
            <h6>Beneficios</h6>
            <h3>Sol Home te ofrece una solución <span>única</span>.</h3>
            <div className='benefits__container'>
                <div className='benefits__box'>
                    <div>
                        <AiOutlineStar />
                        <span onClick={handleOpen}>
                            <h4>Calidad</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>Estos módulos habitacionales cuentan con calidad de primera mano en todas sus materiales y terminaciones.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <FiFastForward />
                        <span onClick={handleOpen}>
                            <h4>Rapidez</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>El modulo se fabrica en solamente 30 dias, siendo la empresa N°1 en este aspecto en el mercado.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <IoKeyOutline />
                        <span onClick={handleOpen}>
                            <h4>Llave en mano & 100% equipado</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>El Modulo se entrega completamente equipado, listo para ser habitado. Viene con electrodomésticos como heladera, TV Smart 32’, aire acondicionado, microondas y horno. Además, viene completo en mueblería de primera calidad y alto diseño.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <MdAttachMoney />
                        <span onClick={handleOpen}>
                            <h4>Economico</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>Una de las virtudes de estas novedosas viviendas es que tiene costos más bajos de los que se encuentran en el mercado, ofreciendo una oportunidad para pensar creativamente una solución que sea económica.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <BiGridAlt />
                        <span onClick={handleOpen}>
                            <h4>Ampliable</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>Es una construcción ver versátil, siempre se podrá ampliar con nuevos módulos, por lo que se puede empezar con un proyecto pequeño y luego planificar nuevos anexos.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <BsSun />
                        <span onClick={handleOpen}>
                            <h4>Excelente aislamiento</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>Cuenta con termo paneles compuesto de aislación de espuma de poliuretano expandido de 50 mm en todas sus caras, otorgando un gran aislamiento térmico para temperaturas extremas.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <BsTruck />
                        <span onClick={handleOpen}>
                            <h4>Transportable</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>Estos módulos se caracterizan por ser movibles, asentandose sobre pilotes, siendo fácil de transportar y de instalar.</p>
                </div>
                <div className='benefits__box'>
                    <div>
                        <AiOutlineSafety />
                        <span onClick={handleOpen}>
                            <h4>Confort</h4>
                            <BsChevronDown />
                        </span>
                    </div>
                    <p>Están diseñadas para lograr un óptimo uso del espacio con el que se cuenta, siendo una solución creativa y moderna a las necesidades habitacionales de aquellos que quieren vivir con lo más elemental sin sacrificar su comodidad.</p>
                </div>
            </div>
        </StyledBenefits>
    );
};