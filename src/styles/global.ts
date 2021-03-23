import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #1A1D29;
        -webkit-font-smoothing: antialiased;
        color: #F9F9F9;
    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
}
    button {
    cursor: pointer;
}
`;
