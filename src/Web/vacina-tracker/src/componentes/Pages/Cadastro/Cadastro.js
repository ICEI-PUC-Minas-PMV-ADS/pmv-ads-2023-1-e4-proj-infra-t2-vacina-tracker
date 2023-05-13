import Input from '../../Layout/Input/Input'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'

import './Cadastro.css'

function CadastroUsuario() {
    return (
        <section className='CadastroUsuario'>

            <h1>Cadastrar</h1>

            <div className='CadastroUsuario-input'>
               <Input type="text" text="E-mail" name="E-mail" placeholder="Cadastre um E-mail" />
               <Input type="password" text="Senha" name="Senha" placeholder="Cadastre uma Senha" />
            </div>
             
            <div className='checkbox-termos'>
                <Input type="checkbox" name="termos"/> Li e Aceito os Termos e Condições de Uso 
            </div>

            <div className='Submit-cadastrar'>
               <button Type="Submit" text="Cadastre-se" name="Cadastrar" />
            </div>

            <div>
               <LinkTexto to="#" text="Já possui cadastro? Faça Login"/> 
            </div>


        </section>      
    )
}

export default CadastroUsuario