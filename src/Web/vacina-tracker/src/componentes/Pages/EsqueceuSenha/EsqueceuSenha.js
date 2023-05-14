import './EsqueceuSenha.css'
import React from 'react'
import imagem from '../../../img/tela_esqueceu_senha.svg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LinkTextoBotao from '../../Layout/LinkTextoBotao/LinkTextoBotao';
import Input from '../../Layout/InputRoxo/InputRoxo';


function EsqueceuSenha() {
    return (
        <section className='esqueceu-senha'>

            <Container>
                <Row className='form-img-esqueceu-senha grid'>
                    <Col md={4} className='form-esqueceu-senha box-esqueceu-senha'>
                        <h1 className='texto-1-esqueceu-senha'>ESQUECEU SUA SENHA?</h1>

                        <div className='altura'>
                            <Input type="text" text="E-mail" name="E-mail" placeholder="Digite seu E-mail" />
                        </div>

                        <div>
                            <Link to="/login">
                                <button className='btn-esqueceu-senha' Type="Submit" text="Recuperar Senha" name="Recuperar Senha" >Recuperar Senha</button>
                            </Link>
                        </div>

                        <div>
                            <LinkTextoBotao to="/Cadastro" text="Não tem Conta? Cadastre-se" />
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 4 }}>
                        <img src={imagem} alt='Tela Esqueceu Senha' />
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

export default EsqueceuSenha