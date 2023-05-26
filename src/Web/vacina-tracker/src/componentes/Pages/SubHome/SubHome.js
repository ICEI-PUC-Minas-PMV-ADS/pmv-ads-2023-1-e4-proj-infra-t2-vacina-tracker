
import { Link } from 'react-router-dom'
import React from 'react'

import MeuPerfil from '../../../img/meu-perfil.png'
import AdicionarMembro from '../../../img/adicionar-membro.png'
import AdicionarVacina from '../../../img/adicionar-vacina.png'
import Privacidade from '../../../img/dashicons_privacy.png'
import CatalogoVacina from '../../../img/favicon-32x32.png'
import MembrosCadastrados from '../../../img/meus-membros.png'
import VacinasCadastradas from '../../../img/minhas-vacinas.png'
import Noticias from '../../../img/bx_news.png'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './SubHome.css'

function SubHome() {
    return (
        <section className='sub-home'>
            <h1>Seja Bem-vindo!</h1>
            <Container>
                <Row className='form-sub'>
                    <Col md={3} className="form-subhome">
                        <div className="lista-icones-subhome">
                            <Link to='/Perfil'>
                                <img src={MeuPerfil} alt="Meu Perfil" />
                                <p>Meu Perfil</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MCadastroMembro'>
                                <img src={AdicionarMembro} alt="Adicionar Membro" />
                                <p>Adicionar Membro</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MCadastroVacina'>
                                <img src={AdicionarVacina} alt="Adicionar Vacina" />
                                <p>Adicionar Vacina</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <img src={Privacidade} alt="Privacidade" />
                                <p>Politica e Termos</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/VacinasCadastradas'>
                                <img src={CatalogoVacina} alt="Catálogo de Vacina" />
                                <p>Catálogo de Vacinas</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MeusMembros'>
                                <img src={MembrosCadastrados} alt="Membros Cadastrados" />
                                <p>Membros Cadastrados</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/VacinasCadastradas'>
                                <img src={VacinasCadastradas} alt="Vacinas Cadastradas" />
                                <p>Vacinas Cadastradas</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <img src={Noticias} alt="Noticias" />
                                <p>Notícias</p>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </Container >

        </section >
    )

}

export default SubHome