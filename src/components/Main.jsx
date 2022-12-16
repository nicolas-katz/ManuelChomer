import React, { useState } from 'react';
import styled from 'styled-components';
import { 
    BsTelephone,
    BsPlay
} from 'react-icons/all';
import Modal from './Modal';

const StyledMain = styled.main`
    width: 100%;
    padding: 180px 20px 60px 20px;

    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.440);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;

    & h6 {
        width: max-content;
        height: max-content;
        padding: 6px 12px;

        background-color: #ffffff16;
        border-radius: 40px;

        color: white;
        font-size: 16px;
        font-weight: 500;
    }

    & h1 {
        margin: 10px 0 14px 0;
        color: white;
        font-size: 42px;
        line-height: 48px;
        font-weight: 400;
    }

    & p {
        margin-bottom: 24px;

        color: white;
        font-size: 20px;
        line-height: 28px;
        font-weight: 300;
    }

    & div {
        display: flex;
        flex-direction: row;
        align-items: center;

        & a {
            width: max-content;
            height: 54px;
            padding: 0 28px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: white;
            border: 1px solid white;
            border-radius: 40px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;

            & svg {
                margin-left: 16px;

                transition: all .6s;

                color: black;
                font-size: 18px;
            }

            &:hover {
                background-color: transparent;

                color: white;

                & svg {
                    color: white;
                }
            }
        }

        & button {
            width: 54px;
            height: 54px;
            margin-left: 18px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: transparent;
            border: 1px solid white;
            border-radius: 50%;
            cursor: pointer;
            transition: all .6s;

            & svg {
                color: white;
                font-size: 24px;
            }

            &:hover {
                background-color: white;

                & svg {
                    color: black;
                }
            }
        }
    }

    @media only screen and (min-width: 425px) {
        & h1 {
            font-size: 44px;
            line-height: 54px;
        }
    }

    @media only screen and (min-width: 540px) {
        & h1 {
            width: 84%
        }

        & p {
            width: 70%;
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 180px 20px 80px 20px;  

        & h1 {
            width: 60%;

            font-size: 48px;
            line-height: 58px;
        }

        & p {
            width: 50%;
        }

    }

    @media only screen and (min-width: 1024px) {        
        & h1 {
            width: 50%;

            font-size: 52px;
            line-height: 62px;
        }

        & p {
            width: 40%;

            font-size: 22px;
            line-height: 32px;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 200px 140px 80px 140px;   
    }
`;

export default function Main() {
    const [openModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    return (
        <StyledMain 
            id='home'>
            <h6>Sol Home</h6>
            <h1>Fabricantes de <strong>micro viviendas</strong> modulares.</h1>
            <p>Calidad, rapidez y confort al alcance de tus manos.</p>
            <div>
                <a href="#contacto">Conoce más <BsTelephone /></a>
                <button
                    onClick={handleClick}>
                    <BsPlay />
                </button>
                <Modal openModal={openModal} handleClose={handleClose} />
            </div>
        </StyledMain>
    )
}