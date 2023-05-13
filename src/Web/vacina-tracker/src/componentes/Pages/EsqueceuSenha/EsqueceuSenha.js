import './EsqueceuSenha.css'

import Input from '../../Layout/Input/Input'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'
<<<<<<< Updated upstream
=======
import imagem from '../../../img/tela_esqueceu_senha.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'reactstrap';
>>>>>>> Stashed changes


function EsqueceuSenha() {
    return (
        <section className='EsqueceuSenha'>

            <h1>Esqueceu sua Senha?</h1>

<<<<<<< Updated upstream
            <div className='Submit-cadastrar'>
               <button Type="Submit" text="Recuperar Senha" name="Recuperar Senha" />
            </div>
=======
            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-esqueceu-senha'>
                        <div className='altura'>
                            <Input type="text" text="E-mail" name="E-mail" placeholder="Digite o E-mail cadastrado" />
                        </div>
>>>>>>> Stashed changes

                        <div>
                            <button className='submit-cadastrar' Type="Submit" >Recuperar Senha</button>
                        </div>

                        <div className='link-texto'>
                            <LinkTexto to="./Cadastro" text="Não tem Conta? Cadastre-se" />
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