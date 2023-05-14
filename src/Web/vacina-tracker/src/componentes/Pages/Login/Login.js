import './Login.css'
import Input from '../../Layout/InputRoxo/InputRoxo'
import LinkTextoBotao from '../../Layout/LinkTextoBotao/LinkTextoBotao'
import React from 'react'
import imagem from '../../../img/tela_login.svg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Login() {
    return (
        <section className='login-usuario'>   
            <Container>
                <Row className='form-img-login grid'>
                    <Col md={4} className='form-login box-login'>
                        <h1 className='texto-1-login'>ACESSO</h1>
                        
                        <div className='altura'>
                            <Input type="text" text="E-mail" name="E-mail" placeholder="Digite seu E-mail" />
                            <Input type="password" text="Senha" name="Senha" placeholder="Digite sua Senha" />
                        </div>     

                        <div>
                            <LinkTextoBotao to="/esqueceusenha" text="Esqueceu a Senha?" />
                        </div>                   

                        <div>
                            <Link to="/perfil">
                                <button className='btn-login' type="Submit" text="Acesso" name="Acesso" >Acessar</button>
                            </Link>
                        </div>

                        <div>
                            <LinkTextoBotao to="/cadastro" text="Não tem Conta? Cadastre-se" />
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
