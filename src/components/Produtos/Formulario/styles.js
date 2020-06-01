import styled, {css} from 'styled-components';

const field = css`
    padding: .5rem 1rem;
    margin-top: 2rem;
    border: none;
    background: none;
    border-bottom: 3px solid RGBA(243, 208, 131, .7);
    font-size: 1.3em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: #333;
    transition: border 130ms ease-in;

    :focus {
        outline: none;
        border-bottom: 3px solid #4480bd;
    }

    ::placeholder {
        color: #aaa;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Div = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    background: red;
`;

export const Span = styled.span`
    color: #000000;
`;

export const Input = styled.input`
    ${field}
`;

export const Textarea = styled.textarea`
    ${field}
    resize: vertical;
    max-height: 8rem;
    height: 2rem;
`;

export const Button = styled.button`
   

`;

export const MessageSpan = styled.span`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

export const ErrorSpan = styled.span`
    color: #791a1a;
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
`;
