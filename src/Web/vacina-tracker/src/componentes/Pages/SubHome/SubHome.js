
import { Link } from 'react-router-dom'
import React from 'react'

import { FaUser, FaUsers, FaUserPlus, FaSyringe, FaLock } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './SubHome.css'

function SubHome() {
    return (
        <section className='sub-home'>
            <h1>Seja Bem-vindo!</h1>
            <Container>
                <Row className='form-sub grid'>
                    <Col md={3} className="form-subhome">
                        <div className="lista-icones-subhome">
                            <Link to='/Perfil'>
                                <FaUser className='icone' />
                                <h3>Meu perfil</h3>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MCadastroMembro'>
                                <FaUserPlus className='icone' />
                                <h3>Adicionar membro</h3>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MCadastroVacina'>
                                <FaSyringe className='icone' />
                                <h3>Adicionar vacina</h3>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <FaLock className='icone' />
                                <h3>Politica e termos</h3>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <FaUserPlus className='icone' />
                                <h3>Catálago de vacinas</h3>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <FaUsers className='icone' />
                                <h3>Membros cadastrados</h3>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <FaSyringe className='icone' />
                                <h3>Vacinas cadastradas</h3>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </Container >

        </section >
    )

}

export default SubHome