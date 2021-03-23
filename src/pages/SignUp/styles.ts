import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;


    img {
        margin-top: 60px;
        width: 200px;
        height: 110px;
    }

    form {
        margin: 55px 0;
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 28px;
            letter-spacing: 1px;
        }
        input {
            margin-top: 30px;
            width: 470px;
            height: 60px;
            border-radius: 6px;
            border: 0;
            padding: 0 20px;
            font-size: 18px;

            background: #31343E;
            color: #f9f9f9;

            &::placeholder {
                font-size: 18px;
                color: #C0C0C1;
                letter-spacing: 1px;
            }
        }

        button {
            margin-top: 42px;
            width: 470px;
            height: 60px;
            border: 0;
            border-radius: 6px;

            font-size: 20px;
            letter-spacing: 1px;


            color: #f9f9f9;
            background: #0072D2;
        }
        p {
            margin-top: 35px;
            font-size: 18px;
            color: #C0C0C1;
            letter-spacing:1px;

            a {
                text-decoration: none;
                color: #C0C0C1;
            }
        }
    }
`;

export const Footer = styled.footer`
    background: #000000;
    text-align: center;

    margin: 0 auto;

    img {
        width: 75px;
        height: 57px;
        margin: 20px 0;
    }

    p {
        line-height: 1.6;
        letter-spacing:1px;

        color: #C0C0C1;
        margin:0 25%;

        & + p {
            padding-top: 20px;
            margin-bottom: 16px;
        }
    }
    span {
        display: flex;
        align-items:center;
        justify-content:center;
        padding-bottom: 20px;

        strong {
            margin-left: 8px;
        }
    }
`;
