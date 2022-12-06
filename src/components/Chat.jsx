import React from 'react';
import styled from 'styled-components';
import {
    BsWhatsapp
} from 'react-icons/all';

const StyledChat = styled.a`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 2;

    @media only screen and (min-width: 1200px) {
      right: 200px;
    }

    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #48da48;
    border-radius: 50%;
    transition: all .6s;

    color: white;
    font-size: 28px;
    text-decoration: none;

    &:hover {
        opacity: .7;

        color: white;
    }
`;

function Chat() {
  return (
    <StyledChat 
        href="https://api.whatsapp.com/send?phone=+5491141403663&text=¡Hola%20Sol%20Home!%20Quiero%20más%20información%20acerca%20de%20la%20micro%20vivienda." 
        target="_blank" 
        rel="noopener noreferrer">
        <BsWhatsapp />
    </StyledChat>
  );
};

export default Chat;