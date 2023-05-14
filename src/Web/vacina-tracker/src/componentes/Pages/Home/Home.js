import './Home.css'
import logo from '../../../img/Logo3 dark2.png'
import imagem from '../../../img/tela_home.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section>
            <img className='logo' src={logo} alt='Logo Vacina Tracker' />

            <h1 className='texto-1'>Seu cartão de vacinas onde você estiver</h1>

            <div className='box-home'>
                <img className='imagem' src={imagem} alt='Tela Home' />
                
                <h2 className='texto-2'>Usuário</h2>
                
                <div className='posicao'>
                    <Link to='/login'>
                        <button className='btn-1-home'>Acessar</button>
                    </Link>
                    <Link to='/cadastro'>
                        <button className='btn-2-home'>Cadastrar</button>
                    </Link>                    
                </div>
            </div>
        </section>
    )
}
export default Home

