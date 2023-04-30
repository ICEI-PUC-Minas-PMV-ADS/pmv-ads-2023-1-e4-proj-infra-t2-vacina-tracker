import './Header.css'
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <section className='header'>
            <div className="logo">   
                <img src="/imagens/Logo3 dark2.png" alt='Logo Vacina Tracker'/>
            </div>

            <div>                 
                <Nav className="navbar" activeKey="/home">                                
                    <Nav.Item>
                        <Nav.Link href="/home">Usuário</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/home">Sair</Nav.Link>
                    </Nav.Item>                
                </Nav>
            </div>            
        </section>
    );
}

export default Header;