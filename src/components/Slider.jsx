import React, { useState } from 'react';
import images from './Gallery';
import styled from 'styled-components';
import {
    BsArrowLeft,
    BsArrowRight
} from 'react-icons/all';

const StyledSlider = styled.div`
    position: relative;

    width: 100%;
    height: max-content;


    & button {
        position: absolute;
        bottom: 4px;
        z-index: 1;
        
        &:first-child {
            left: 0;
        }

        &:last-child {
            left: 60px;
        }

        min-width: 60px !important;
        height: 60px !important;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border: none;
        border-radius: 0;
        outline: none;
        cursor: pointer;
        transition: all .6s;

        & svg {
            color: white;
            font-size: 20px;
        }

        &:hover {
            opacity: .6;
        }
    }

    & div {
        max-width: 100%;
        height: auto;
        opacity: 0;
        transition: opacity .8s ease-in-out;

        &.active {
            opacity: 1;
        }

        & img {
            width: 100%;
            height: 520px;
            object-fit: cover;
        }
    }
`;

export default function Slider() {
    const [imgActual, setImgActual] = useState(0);
    const imgCantidad = images?.length;

    if(!Array.isArray(images) || imgCantidad === 0) return;

    const imgSiguiente = () => {
        setImgActual(imgActual === imgCantidad - 1 ? 0 : imgActual + 1)
    }

    const imgAnterior = () => {
        setImgActual(imgActual === 0 ? imgCantidad - 1 : imgActual - 1)
    }

    return (
        <StyledSlider>
            <button onClick={imgAnterior}><BsArrowLeft /></button>
            {images.map((image, index) => (
                <div 
                    key={index} 
                    className={imgActual === index ? 'active' : ''}>
                    {imgActual === index &&
                    <img 
                       src={image} 
                        alt="Galería de fotos - Sol Home"
                    /> 
                    }
                </div>
            ))}
            <button onClick={imgSiguiente}><BsArrowRight /></button>
        </StyledSlider>
    )
}