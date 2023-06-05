
import { Link } from 'react-router-dom'
import React from 'react'

import MeuPerfil from '../../../img/meu-perfil.png'
import AdicionarMembro from '../../../img/adicionar-membro.png'
import AdicionarVacina from '../../../img/adicionar-vacina.png'
import Privacidade from '../../../img/dashicons_privacy.png'
import CatalogoVacina from '../../../img/logo-dark.png'
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
                    <Col className="form-subhome">
                        <div className="lista-icones-subhome">
                            <Link to='/Perfil'>
                                <img className="img-subhome" src={MeuPerfil} alt="Meu Perfil" />
                                <p className="txt-subhome">Meu Perfil</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MCadastroMembro'>
                                <img className="img-subhome" src={AdicionarMembro} alt="Adicionar Membro" />
                                <p className="txt-subhome">Adicionar Membro</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MCadastroVacina'>
                                <img className="img-subhome" src={AdicionarVacina} alt="Adicionar Vacina" />
                                <p className="txt-subhome">Adicionar Vacina</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <img className="img-subhome" src={Privacidade} alt="Privacidade" />
                                <p className="txt-subhome">Política e Termos</p>
                            </Link>
                        </div>
                    </Col>
                    <Col className="form-subhome">    
                        <div className="lista-icones-subhome">
                            <Link to='/VacinasCadastradas'>
                                <img className="img-subhome" src={CatalogoVacina} alt="Catálogo de Vacina" />
                                <p className="txt-subhome">Catálogo de Vacinas</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/MeusMembros'>
                                <img className="img-subhome" src={MembrosCadastrados} alt="Membros Cadastrados" />
                                <p className="txt-subhome">Membros Cadastrados</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/VacinasCadastradas'>
                                <img className="img-subhome" src={VacinasCadastradas} alt="Vacinas Cadastradas" />
                                <p className="txt-subhome">Vacinas Cadastradas</p>
                            </Link>
                        </div>

                        <div className="lista-icones-subhome">
                            <Link to='/PoliticaTermos'>
                                <img className="img-subhome" src={Noticias} alt="Noticias" />
                                <p className="txt-subhome">Notícias</p>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </Container >

        </section >
    )

}

export default SubHome