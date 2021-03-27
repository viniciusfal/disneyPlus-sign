import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        img {
            width: 70px;
            height: 50px;
            position: absolute;
            left: 0;
            margin: 18px 33px;
        }
    }
    img {
        width: 100%;
        height: 100vh;
    }
`;
export const Footer = styled.footer`
    background: #000000;
    text-align: center;

    margin: 0 auto;

    img {
        width: 72px;
        height: 43px;
        margin: 20px 0;
    }

    p {
        font-size: 14px;
        line-height: 1.6;
        letter-spacing: 1px;

        color: #c0c0c1;
        margin: 0 25%;

        & + p {
            padding-top: 20px;
            margin-bottom: 16px;
        }
    }
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 20px;
        strong {
            margin-left: 8px;
        }
    }
`;
