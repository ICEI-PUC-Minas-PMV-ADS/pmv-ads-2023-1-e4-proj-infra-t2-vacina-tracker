import './MCadastroMembro.css'

import Input from '../../Layout/InputRoxo/InputRoxo'
import { FaSave, FaPlusCircle } from "react-icons/fa";
import React from 'react'
import imagem from '../../../img/tela_cadastro_membro.svg'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MCadastroMembro() {
    return (
        <section className='cadastro-membro'>

            <h1>Cadastrar Membro</h1>

            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-cadastro-membro'>
                        <div className='altura'>
                            <Input type="text" text="Nome do Membro " name="name" placeholder="Digite o Nome do Membro" />
                            <Input type="text" text="Idade " name="senha" placeholder="Digite a Idade" />
                        </div>

                        <div className='lista-icones-cadastro-membro'>
                            <Link to='/meusmembros'><FaSave className='icone' /></Link>
                            <Link to='/mcadastromembro'><FaPlusCircle className='icone' /></Link>
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 4 }}>
                        <img src={imagem} alt='Cadastro Membro' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MCadastroMembro