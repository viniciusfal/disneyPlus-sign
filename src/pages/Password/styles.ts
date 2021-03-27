import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 40px;
        width: 165px;
        height: 85px;
    }

    form {
        margin: 55px 0;
        display: flex;
        flex-direction: column;
        h2 {
            font-size: 23px;
            letter-spacing: 1px;
        }
        input {
            margin-top: 25px;
            width: 375px;
            height: 51px;
            border-radius: 6px;
            border: 0;
            padding: 0 15px;
            font-size: 16px;
            background: #31343e;
            color: #f9f9f9;

            &:focus {
                border: 1px solid #6d6f76;
            }
            &::placeholder {
                font-size: 14px;
                color: #c0c0c1;
                letter-spacing: 1px;
            }
        }

        button {
            margin-top: 35px;
            width: 375px;
            height: 51px;
            border: 0;
            border-radius: 6px;
            font-size: 18px;

            letter-spacing: 1px;

            color: #f9f9f9;
            background: #0072d2;
            transition: background-color 0.2s;

            &:hover {
                background: ${shade(0.2, '#0072d2')};
            }
        }
        p {
            margin-top: 30px;
            font-size: 14px;
            font-weight: normal;
            color: #c0c0c1;
            letter-spacing: 1px;

            a {
                text-decoration: none;
                color: #c0c0c1;
                margin-left: 5px;

                &:hover {
                    text-decoration: underline;
                    color: #80b2dc;
                }
            }
        }
    }
`;
export const Error = styled.div`
    color: #c53030;

    font-size: 20px;
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
