import React from 'react';
import { MdCopyright } from 'react-icons/md';

import logo from '../../assets/logo-disney-plus.png'
import { Container, Footer } from './styles'

const SignUp: React.FC = () => (
    <>
        <Container>
            <img src={logo} alt="Disney Plus" />

            <form >
                <h2>Use o seu e-mail para entrar</h2>

                <input type="password" placeholder="Senha" />

                <button type="submit">CONTINUAR
                </button>

                <p>Não tem Disney+? <a href="signUp"><strong>Assine</strong></a></p>
            </form>
        </Container>
        <Footer>
            <img src={logo} alt="Disney-Plus" />

            <p>Esse é apenas um clone do Disney+ feito por um admirador da plataforma. Esse arquivo está disponível no meu <a href="https://github.com/viniciusfal">GitHub</a> junto com outros trabalhos. Estão convidados a conhece-los.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nec ullamcorper sit amet risus. Libero id faucibus nisl tincidunt eget nullam. Enim blandit volutpat maecenas volutpat blandit. Massa ultricies mi quis hendrerit dolor magna eget est.</p>
            <span>
                <MdCopyright size={18} />
                <strong>Disney</strong>
            </span>
        </Footer>
    </>
)

export default SignUp;
