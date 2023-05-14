import Input from '../../Layout/InputRoxo/InputRoxo'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'

import './Perfil.css'
//import {FontAwesomeIcon} from '@fortawesome/fontawesome-free'
import { FaUserCircle, FaUserPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'
import React from 'react'
import imagem from '../../../img/tela_perfil.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Perfil() {
    return (
        <section className='perfil'>

            <h1>Perfil do Usuário</h1>

            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-perfil'>
                        <div className='lista-icone-perfil'>
                            <FaUserCircle className='icone-user' />
                        </div>

                        <div className='altura'>                            
                            <Input type="text" text="E-mail " name="name" placeholder="Digite seu E-mail" />
                            <Input type="text" text="Senha " name="senha" placeholder="Digite sua Nova Senha" />
                            <Input type="text" text="Confirme sua Senha " name="senha" placeholder="Confirme sua Nova Senha" />

                            <div className='botoes-perfil'>                                
                                <Link to='/perfil'><button className='btn-perfil'>Salvar Alterações</button></Link>   
                                <Link to='/'><button className='btn-perfil-excluir'>Excluir Conta</button></Link>                             
                            </div>                            
                        </div>

                        <div className='lista-icones-perfil'>
                            <LinkTexto to="/meusmembros" text="Membros" />
                            <Link to='/mcadastromembro'><FaUserPlus className='icone' /></Link>                            
                        </div>

                        <div className='lista-icones-perfil'>
                            <LinkTexto to="/vacinascadastradas" text="Vacinas" />
                            <Link to='/mcadastrovacina'><FaUserPlus className='icone' /></Link>                            
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

export default Perfil