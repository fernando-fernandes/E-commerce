import styled from 'styled-components';

export const Modal = styled.div`
    height: 80vh;
    width: 60vw;
    background: rgba(255,255,255,.8);
    backdrop-filter: blur(5px);
    border-radius: .4rem;
    padding: 2rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: RGBA(10, 10, 10, .3) 0 0 2.4rem -1rem;
`;
