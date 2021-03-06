import styled from 'styled-components';

export const Modal = styled.div`
    height: 80vh;
    width: 60vw;
    background: rgba(255,255,255,.85);
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
    box-shadow: RGBA(10, 10, 10, .4) 4px 4px 2.4rem -1rem;
    z-index: 99;
`;
