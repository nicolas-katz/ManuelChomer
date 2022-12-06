import React, { useEffect } from 'react';
import styled from 'styled-components';
import brand from '../assets/brand.png';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 10px 20px;

    background-color: transparent;
    transition: all .6s;

    & nav {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & a img {
            width: 80px;

            object-fit: contain;
        }

        & ul {
            position: fixed;
            top: 0;
            right: -2000px;

            width: 100%;
            height: 100vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: white;

            text-align: center;

            & .data__header__mobile {
                width: 100%;
                margin-top: 40px;
                padding-top: 40px;

                border-top: 1px solid gainsboro;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                & div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    & h5 {
                        margin-bottom: 10px;
                        
                        color: grey;
                        font-size: 12px;
                        font-weight: 500;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }

                    & a {
                        width: max-content;

                        transition: all .6s;

                        color: black;
                        font-size: 16px;
                        font-weight: 400;
                        text-decoration: none;

                        &:hover {
                            color: var(--colorHover);
                        }
                    }
                }
            }

            & li {
                margin: 14px 0;
                
                list-style: none;

                & a {
                    width: max-content;

                    transition: all .6s;
                    cursor: pointer;

                    color: black;
                    font-size: 18px;
                    font-weight: 400;
                    text-decoration: none;
                }
                
                &:hover a { 
                    color: var(--colorHover);
                }
            }
        }

        & .burger__menu {            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            & span {
                width: 42px;
                height: 1px;
                margin: 6px 0;

                background-color: white;
            }

            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
    }

    &.add__scroll_effect:not(.open__menu) {
        background-color: white;

        & nav {
            & ul {
                & li {
                    & a {
                        color: black;
                    }
                }
            }

            & .burger__menu {
                & span {
                    background-color: black;
                }
            }
        }
    }

    &.open__menu {
        & nav {
            & ul {
                right: 0;
            }

            & .burger__menu {
                position: fixed;
                top: 60px;
                right: 36px;
                z-index: 10;

                & span {
                    width: 28px;
                    margin: 0;

                    background-color: black;

                    transform: rotate(120deg);

                    &:last-child {
                        transform: rotate(-120deg);
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & nav {
            & a img {
                width: 120px;
            }
            
            & ul {
                position: unset;

                width: 100%;
                height: max-content;

                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                background-color: transparent;

                text-align: left;

                & .data__header__mobile {
                    display: none;
                }

                & li {
                    margin: 0;
                    margin-left: 40px;
                    
                    & a {
                        color: white;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 20px 200px;
    }
`;

export default function Header() {
    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 300 || window.scrollY) {
                document.querySelector('header').classList.add('add__scroll_effect');
            } else {
                document.querySelector('header').classList.remove('add__scroll_effect');
            }
        })
    }, [window.scrollY]);

    const handleOpenMenu = () => {
        document.querySelector('header').classList.toggle('open__menu');
    }

    const handleOpenMenuByLinks = () => {
        document.querySelectorAll('ul li').forEach(() => {
            document.querySelector('header').classList.remove('open__menu');
        });
    }

    return (
        <StyledHeader>
            <nav>
                <a href="#home">
                    <img 
                        src={brand} 
                        alt="Sol Home - Micro Viviendas" 
                    />
                </a>
                <ul>                    
                    <li onClick={handleOpenMenuByLinks}>
                        <a href="#home">Inicio</a>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <a href="#productos">Productos</a>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <a href="#beneficios">Beneficios</a>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <a href="#compania">Compañía</a>
                    </li>
                    <li onClick={handleOpenMenuByLinks}>
                        <a href="#contacto">Contacto</a>    
                    </li>
                    <div className='data__header__mobile'>
                        <div>
                            <h5>Email</h5>
                            <a href='mailto:solhomearg@gmail.com' target='_blank' rel="noopener noreferrer">solhomearg@gmail.com</a>
                        </div>
                        <div>
                            <h5>Descargas</h5>
                            <a href='/' target='_blank' rel="noopener noreferrer">Brochure</a>
                        </div>
                    </div>
                </ul>
                <div 
                    className="burger__menu"
                    onClick={handleOpenMenu}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </StyledHeader>
    );
};