import './MeusMembros.css'
import Input from '../../Layout/Input/Input'
import Botao from '../../Layout/Botao/Botao'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'
import ReactTable from 'react-table';
import axios from 'axios';


function MeusMembros() {
    return (
        <section className='CadastroUsuario'>

            <div>
                <h1>Meus Membros</h1>

                <section class="grid1 grid-template-columns-3">
                    <div class="item1">Nome</div>
                    <div class="item1">Idade</div>
                    <div class="item1">Vacinas</div>

            
                </section>
            </div>

        </section>
    )
}

export default MeusMembros