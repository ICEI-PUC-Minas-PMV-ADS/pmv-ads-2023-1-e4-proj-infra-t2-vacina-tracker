import './Header.css'
//import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <section className='header'>
            <div className="logo">
                <img src="/imagens/Logo3 dark2.png" alt='Logo Vacina Tracker' />
            </div>

            <ul className="navbar">
                <li className="item">
                    <Link to="/login">Acessar</Link>
                </li>
                <li className="item">
                    <Link to="/cadastro">Cadastrar</Link>
                </li>
                <li className="item">
                    <Link to="/perfil">Usuário</Link>
                </li>
                <li className="item">
                    <Link to="/home">Sair</Link>
                </li>
            </ul>
        </section>
    );
}

export default Header;