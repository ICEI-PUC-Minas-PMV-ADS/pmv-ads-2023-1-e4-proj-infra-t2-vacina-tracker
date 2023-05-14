import './MCadastroVacina.css'

import Input from '../../Layout/InputRoxo/InputRoxo'
import { FaSave, FaPlusCircle } from "react-icons/fa";
//import { Link } from 'react-router-dom';
import imagem from '../../../img/tela_cadastro_vacina.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MCadastroVacina() {  
    return (
        <section className='cadastro-vacina'>

            <h1>Cadastrar Vacina</h1>

            <Container>
                <Row className='form-img grid'>
                    <Col md={4} className='form-cadastro-vacina'>                        
                        <div className='altura'>
                            <Input type="text" text="Nome da Vacina" name="name" placeholder="Selecione o Nome da Vacina" />
                            <Input type="date" text="Data da Aplicação" name="data" />
                            <Input type="select" text="Dose" name="dose" placeholder="Selecione a Dose" />
                            <Input type="date" text="Data da Próxima Aplicação " name="data" />
                        </div>

                        <div className='checkbox-cadastro-vacina'>
                            <Input type="checkbox" name="caixa-texto" /> Ativar/Desativar Lembrete 
                        </div>

                        <div className='lista-icones-cadastro-vacina'>
                            <FaSave className='icone' />
                            <FaPlusCircle className='icone' />
                        </div>                        
                    </Col>

                    <Col md={{ span: 4, offset: 4 }}>
                        <img src={imagem} alt='Cadastro Vacina' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MCadastroVacina