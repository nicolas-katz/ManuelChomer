import React from 'react';
import video from '../assets/video.mp4';
import styled from 'styled-components';
import { 
    IoClose 
} from 'react-icons/all';

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #00000078;

    visibility: hidden;

    &.active {
        z-index: 100;   

        visibility: visible;
    }

    & div.modal__container {
        position: relative;

        width: 100%;
        min-width: 280px;
        max-width: 500px;
        height: 100%;
        min-height: 200px;
        max-height: 400px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & span {
            position: absolute;
            top: -40px;
            right: 0;

            width: 28px;
            height: 28px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid white;
            border-radius: 50%;
            cursor: pointer;

            svg {
                color: white;
                font-size: 22px;
            }
        }

        & video {
            width: 100%;
            height: 100%;

            border: none;
            border-radius: 1px;

            object-fit: cover;
        }
    }
`;

export default function Modal({openModal, handleClose}) {
    return(
        <StyledModal className={openModal && 'active'}>
            <div className='modal__container'>
                <span>
                    <IoClose onClick={() => handleClose()} />
                </span>
                <video 
                    src={openModal ? video : ''} 
                    controls>
                </video>
            </div>
        </StyledModal>
    );
};