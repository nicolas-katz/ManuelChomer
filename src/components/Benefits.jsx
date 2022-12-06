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

                & h4 {
                    width: 100%;
                    margin-left: 28px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    color: white;
                    font-size: 24px;
                    font-weight: 400;

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
                    & h4 {
                        & svg {
                            transform: rotate(180deg);
                        }
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

        .BenefitsContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            .BenefitsBox {
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
        padding: 100px 200px;

        & h3 {
            width: 70%;
            
            font-size: 50px;
            line-height: 60px;
        }
    }
`;

export default function Benefits() {
    const handleOpen = (e) => {
        document.querySelectorAll(".BenefitsContainer .BenefitsBox").forEach((element) => { 
            if(element == e.target.parentNode.parentNode) {
                element.classList.toggle('active');
            } else {
                element.classList.remove('active');
            }
        })
    }

    return (
        <StyledBenefits
            id='beneficios'>
            <h6>Beneficios</h6>
            <h3>Sol Home te ofrece una solución <span>única</span>.</h3>
            <div className='BenefitsContainer'>
                <div className='BenefitsBox'>
                    <div>
                        <AiOutlineStar />
                        <h4 onClick={handleOpen}>
                            Calidad
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>Construcción de módulos con sistemas Steel Framing. Agregar conceptos de durabilidad.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <FiFastForward />
                        <h4 onClick={handleOpen}>
                            Rapidez
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>El modulo se fabrica en solamente 30 dias, siendo la empresa N°1 en este aspecto en el mercado.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <IoKeyOutline />
                        <h4 onClick={handleOpen}>
                            Llave en mano & 100% equipado
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>El Modulo se entrega completamente equipado, listo para ser habitado. Viene con electrodomésticos como heladera, TV Smart 32’, aire acondicionado, microondas y horno. Además, viene completo en mueblería de primera calidad y alto diseño.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <MdAttachMoney />
                        <h4 onClick={handleOpen}>
                            Economico
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>Una de las virtudes de estas novedosas viviendas es que tiene costos más bajos de los que se encuentran en el mercado, ofreciendo una oportunidad para pensar creativamente una solución que sea económica.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <BiGridAlt />
                        <h4 onClick={handleOpen}>
                            Ampliable
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>Es una construcción ver versátil, siempre se podrá ampliar con nuevos módulos, por lo que se puede empezar con un proyecto pequeño y luego planificar nuevos anexos.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <BsSun />
                        <h4 onClick={handleOpen}>
                            Excelente aislamiento
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>Cuenta con termo paneles compuesto de aislación de espuma de poliuretano expandido de 50 mm en todas sus caras, otorgando un gran aislamiento térmico siendo muy útil para zonas de frío, calor y vientos extremos.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <BsTruck />
                        <h4 onClick={handleOpen}>
                            Transportable
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>Estos módulos se caracterizan por ser movibles, asentandose sobre pilotes, siendo fácil de transportar y de instalar.</p>
                </div>
                <div className='BenefitsBox'>
                    <div>
                        <AiOutlineSafety />
                        <h4 onClick={handleOpen}>
                            Confort
                            <BsChevronDown />
                        </h4>
                    </div>
                    <p>Están diseñadas para lograr un óptimo uso del espacio con el que se cuenta, siendo una solución creativa y moderna a las necesidades habitacionales de aquellos que quieren vivir con lo más elemental sin sacrificar su comodidad.</p>
                </div>
            </div>
        </StyledBenefits>
    );
};