import React from 'react';
import styled from 'styled-components';
import {
  BsCloudDownload
} from 'react-icons/all';

const StyledBrochure = styled.div`
    width: 100%;
    height: max-content;
    padding: 40px 20px;

    background-color: var(--colorPrincipal);

    & div {
      display: flex;
      flex-direction: column;

      & span {
        margin-bottom: 24px;

        display: flex;
        flex-direction: column;

        & h4 {
          color: white;
          font-size: 32px;
          line-height: 42px;
          font-weight: 500;
        }

        & p {
          margin-top: 20px;

          color: white;
          font-size: 18px;
          line-height: 28px;
          font-weight: 300;
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

        background-color: white;
        border-radius: 40px;
        transition: all .6s;

        color: var(--colorPrincipal);
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;

        & svg {
          margin-left: 16px;
        }

        &:hover {
          opacity: .7;
          
          color: var(--colorPrincipal);
        }
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 100px 20px;

      background-color: white;

      & div {
        padding: 40px 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: var(--colorPrincipal);

        & span {
          width: 70%;
          margin-bottom: 0;

          text-align: left;
        }

        & a {
          height: 64px;
          padding: 0 32px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      & div {
        & span {
          & h4 {
            font-size: 40px;
            line-height: 50px;
          }

          & p {
            font-size: 20px;
            line-height: 30px;
          }
        }

        & a {
          padding: 0 40px;

          font-size: 20px;
        }
      }
    }

    @media only screen and (min-width: 1200px) {
      padding: 100px 200px;
      
      & div {
        padding: 40px;
      }
    }
`;

export default function Brochure() {
  return (
    <StyledBrochure>
        <div>
          <span>
              <h4>Conoce más nuestras micro viviendas</h4>
              <p>Descargate nuestro brochure para enterarte de todos los detalles y sacarte todas tus dudas.</p>
          </span>
          <a href="/">Descargar <BsCloudDownload /></a>
        </div>
    </StyledBrochure>
  )
}