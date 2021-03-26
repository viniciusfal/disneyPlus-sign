import React from 'react';

import { MdCopyright } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-disney-plus.png';
import { Container, Footer } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <Container>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <img
                    src="https://i.ibb.co/YhZXMM4/mandalorian-lede-1300x731-1.jpg"
                    alt="The mandalorian"
                />
            </Container>
            <Footer>
                <img src={logo} alt="Disney-Plus" />

                <p>
                    Esse é apenas um clone do Disney+ feito por um admirador da
                    plataforma. Esse arquivo está disponível no meu{' '}
                    <a href="https://github.com/viniciusfal">GitHub</a> junto
                    com outros trabalhos. Estão convidados a conhece-los.
                    <br /> Imagem extraida de:
                    https://obarquinhocultural.com/2020/12/27/the-mandalorian-o-spin-off-de-star-wars-criado-por-jon-favreau-para-a-disney-plus/
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Aliquet nec ullamcorper sit amet risus. Libero id
                </p>
                <span>
                    <MdCopyright size={18} />
                    <strong>Disney</strong>
                </span>
            </Footer>
        </>
    );
};

export default Dashboard;
