import React, { useCallback, useRef, useState } from 'react';
import { MdCopyright } from 'react-icons/md';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo-disney-plus.png';

import { Container, Footer, Error } from './styles';

const Email: React.FC = () => {
    const [newData, setNewData] = useState('');
    const [newError, setNewError] = useState('');
    const formRef = useRef<FormHandles>(null);
    const history = useHistory();

    const handleSubmit = useCallback(async (): Promise<void> => {
        if (!newData) {
            setNewError('Email obrigatório');
            return;
        }

        history.push('/password');
    }, [history, newData]);

    return (
        <>
            <Container>
                <img src={logo} alt="Disney Plus" />

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h2>Use o seu e-mail para entrar</h2>

                    <input
                        name="email"
                        type="email"
                        value={newData}
                        onChange={event => setNewData(event.target.value)}
                        placeholder="E-mail"
                    />

                    <button type="submit">CONTINUAR</button>

                    <p>
                        Não tem Disney+?
                        <a href="signUp">
                            <strong>Assine</strong>
                        </a>
                    </p>
                </Form>
                {newError && <Error>{newError}</Error>}
            </Container>
            <Footer>
                <img src={logo} alt="Disney-Plus" />

                <p>
                    Esse é apenas um clone do Disney+ feito por um admirador da
                    plataforma. Esse arquivo está disponível no meu{' '}
                    <a href="https://github.com/viniciusfal">GitHub</a> junto
                    com outros trabalhos. Estão convidados a conhece-los.
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

export default Email;
