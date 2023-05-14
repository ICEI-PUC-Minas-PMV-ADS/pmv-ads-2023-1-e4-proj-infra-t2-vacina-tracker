import Input from '../../Layout/Input/Input'
import LinkTextoBotao from '../../Layout/LinkTextoBotao/LinkTextoBotao'

import './Cadastro.css'
import React from 'react'
import imagem from '../../../img/tela_cadastro.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CadastroUsuario() {
    return (
        <section className='cadastro-usuario'>   
            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-cadastro box'>
                        <h1 className='texto-1'>CADASTRAR</h1>
                        
                        <div className='altura'>
                            <Input type="text" text="E-mail" name="E-mail" placeholder="Cadastre um E-mail" />
                            <Input type="password" text="Senha" name="Senha" placeholder="Cadastre uma Senha" />
                        </div>

                        <div className='checkbox-termos'>
                            <Input type="checkbox" name="termos" /> Li e Aceito os Termos e Condições de Uso
                        </div>

                        <div>
                            <button className='btn' type="Submit" text="Cadastre-se" name="Cadastrar" >Cadastre-se</button>
                        </div>

                        <div>
                            <LinkTextoBotao to="#" text="Já possui cadastro? Faça Login" />
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 4 }}>
                        <img src={imagem} alt='Tela Cadastro' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CadastroUsuario