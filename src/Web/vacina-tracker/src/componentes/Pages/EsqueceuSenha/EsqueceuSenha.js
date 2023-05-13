import Input from '../../Layout/Input/Input'
import LinkTexto from '../../Layout/LinkTexto/LinkTexto'

import './EsqueceuSenha.css'

function EsqueceuSenha() {
    return (
        <section className='EsqueceuSenha'>

            <h1>Esqueceu sua Senha?</h1>
            
            <div className='EsqueceuSenha-input'>
               <Input type="text" text="E-mail" name="E-mail" placeholder="Digite o E-mail cadastrado" />
            </div>

            <div className='Submit-cadastrar'>
               <button Type="Submit" text="Recuperar Senha" name="Recuperar Senha" />
            </div>

            <div>
               <LinkTexto to="#" text="Não tem Conta? Cadastre-se"/> 
            </div>

        </section>
    )
}

export default EsqueceuSenha