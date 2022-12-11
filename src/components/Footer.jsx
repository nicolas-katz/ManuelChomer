import React from 'react';
import styled from 'styled-components';
import { 
  BsInstagram, 
  FaFacebookF
} from 'react-icons/all';
import brand from '../assets/brand.png';
import brochure from '../assets/brochure.pdf';

const StyledFooter = styled.footer`
  position: relative;
  z-index: 1;

  width: 100%;
  height: max-content;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;

  background-color: #f5f5f59f;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-areas: 
    'brand nav'
    'brand datos';
  }

  @media only screen and (min-width: 768px) {
    padding: 40px 20px;
  }

  @media only screen and (min-width: 900px) {
    padding-bottom: 100px !important;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & div.FooterNavigation {
      & div {
        width: max-content;
        margin: 0 16px;
      }
    }

    & div.FooterDatos {
      margin-left: 32px;
    }

    & div.FooterCopyright {
      position: absolute;
      bottom: 0;
      
      margin-top: 100px;
      padding-bottom: 40px;
    }
  }

  @media only screen and (min-width: 1024px) {
    & div.FooterNavigation {
      & div {
        margin: 0 24px;
      }
    }

    & div.FooterDatos {
      margin-left: 60px;
    }

    & div.FooterCopyright {
      border: none !important;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 100px 200px;

    & div.FooterNavigation {
      & div {
        margin: 0 20px;
      }
    }
  }

  & div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  & div.FooterBrand {
    grid-area: 'brand';
    display: flex;
    flex-direction: column;

    a:first-child {
      width: 100%;
      margin-top: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (min-width: 768px) {
      a:first-child {
        width: max-content;

        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    a img {
      width: 120px;
      margin-bottom: 40px;

      object-fit: cover;
    }

    h4 {
      color: black;
      font-size: 17px;
      font-weight: 500;
    }

    a {
      margin-top: 16px;

      transition: all .6s;

      color: gray;
      font-size: 16px;
      line-height: 26px;
      font-weight: 300;
      text-decoration: none;

      &:hover {
        color: gray;

        opacity: .7;
      }
    }
  }

  & div.FooterNavigation {
    grid-area: 'nav';
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {      
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 16px;

        color: black;
        font-size: 16px;
        font-weight: 500;
      }

      a {
        width: max-content;
        margin-bottom: 6px;

        transition: all .6s;

        color: gray;
        font-size: 16px;
        font-weight: 300;
        text-decoration: none;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          color: gray;

          opacity: .7;
        }
      }
    }
  }

  & div.FooterDatos {
    & a {
      width: max-content;
      margin-bottom: 8px;

      grid-area: 'datos';
      display: block;

      transition: all .6s;

      color: gray;
      font-size: 16px;
      font-weight: 300;
      text-decoration: none;

      &:hover {
        color: gray;

        opacity: .7;
      }
    }

    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    & div a {
      width: 32px;
      height: 32px;
      margin-top: 20px;
      margin-right: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid gray;
      border-radius: 50%;
    }

    & div a svg {
      color: gray;
      font-size: 14px;
    }
  }

  & div.FooterCopyright {
    padding-top: 20px;

    grid-area: 'copyright';

    border-top: 1px solid gainsboro;

    h6 {
      color: gray;
      font-size: 16px;
      line-height: 26px;
      font-weight: 300;
    }
  }
`;

export default function Footer() {
    return (
      <StyledFooter>
        <div className='FooterBrand'>
          <a href="#home">
            <img 
              src={brand}
              alt='Sol Home - Micro Viviendas'
            />
          </a>
          <h4>Proximamente en</h4>
          <a 
            href="https://goo.gl/maps/56xMuLBH1Sko2VwV7" 
            target="_blank" 
            rel="noopener noreferrer">
            Shopping Remeros Plaza. Ruta 27 y Camino de los Remeros 1648. Tigre, Buenos Aires
          </a>
        </div>
        <div className='FooterNavigation'>
          <div>
            <h4>Productos</h4>
            <a href="#productos">Modulos</a>
            <a href="#galeria">Galería</a>
            <a href={brochure} target='_blank' rel="noopener noreferrer">Brochure</a>
          </div>
          <div>
            <h4>Nosotros</h4>
            <a href="#compania">Compañía</a>
            <a href="#beneficios">Beneficios</a>
          </div>
          <div>
            <h4>Conoce más</h4>
            <a href="#contacto">Contacto</a>
            <a 
              href="https://api.whatsapp.com/send?phone=+5491141403663&text=¡Hola%20Sol%20Home!%20Quiero%20más%20información%20acerca%20de%20la%20micro%20vivienda." 
              target="_blank" 
              rel="noopener noreferrer">
              Chat ahora
            </a>
          </div>
        </div>
        <div className='FooterDatos'>
            <a href="mailto:solhomearg@gmail.com">solhomearg@gmail.com</a>
            <a 
              href="https://api.whatsapp.com/send?phone=+5491141403663&text=¡Hola%20Sol%20Home!%20Quiero%20más%20información%20acerca%20de%20la%20micro%20vivienda." 
              target="_blank" 
              rel="noopener noreferrer">
              +54 (11) 41403663
            </a>
            <div>
              <a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer">
                <BsInstagram />
              </a>
              <a 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer">
                <FaFacebookF />
              </a>
            </div>
        </div>
        <div className="FooterCopyright">
          <h6>Todos los derechos reservados. © Sol Home 2022</h6>
        </div>
      </StyledFooter>
    )
}