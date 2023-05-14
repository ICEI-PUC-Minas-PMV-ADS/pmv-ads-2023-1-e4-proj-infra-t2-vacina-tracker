import './Login.css'
import Input from '../../Layout/Input/Input'
import LinkTextoBotao from '../../Layout/LinkTextoBotao/LinkTextoBotao'
import React from 'react'
import imagem from '../../../img/tela_login.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
    return (
        <section className='login-usuario'>   
            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-login box'>
                        <h1 className='texto-1'>ACESSO</h1>
                        
                        <div className='altura'>
                            <Input type="text" text="E-mail" name="E-mail" placeholder="Cadastre um E-mail" />
                            <Input type="password" text="Senha" name="Senha" placeholder="Cadastre uma Senha" />
                        </div>     

                        <div>
                            <LinkTextoBotao to="#" text="Esqueceu a Senha?" />
                        </div>                   

                        <div>
                            <button className='btn' type="Submit" text="Cadastre-se" name="Cadastrar" >Cadastre-se</button>
                        </div>

                        <div>
                            <LinkTextoBotao to="#" text="Já possui cadastro? Faça Login" />
                        </div>
                    </Col>
                    
                    <Col md={{ span: 4, offset: 4 }}>
                        <img src={imagem} alt='Perfil' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Login
