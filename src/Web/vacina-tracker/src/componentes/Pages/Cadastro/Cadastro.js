import Input from '../../Layout/Input/Input'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'
import imagem from '../../../img/tela_cadastro.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Cadastro.css'
import { Button } from 'reactstrap';

function CadastroUsuario() {
    return (
        <section className='CadastroUsuario'>

            <h1>Cadastrar</h1>

            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-cadastro-usuario'>
                        <div className='CadastroUsuario-input'>
                            <Input type="text" text="E-mail" name="E-mail" placeholder="Cadastre um E-mail" />
                            <Input type="password" text="Senha" name="Senha" placeholder="Cadastre uma Senha" />
                        </div>

<<<<<<< Updated upstream
            <div className='Submit-cadastrar'>
               <button Type="Submit" text="Cadastre-se" name="Cadastrar" />
            </div>
=======
                        <div className='checkbox-termos'>
                            <Input type="checkbox" name="termos" /> Li e Aceito os Termos e Condições de Uso
                        </div>
>>>>>>> Stashed changes

                        <div className='Submit-cadastrar'>
                            <Button Type="Submit" text="Cadastre-se" name="Cadastrar" />
                        </div>

                        <div>
                            <LinkTexto to="./Login" text="Já possui cadastro? Faça Login" />
                        </div>
                    </Col>

                    <Col md={{ span: 4, offset: 4 }}>
                        <img src={imagem} alt='Tela de cadastro'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CadastroUsuario