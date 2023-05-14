import './LinkTextoBotao.css'
import { Link } from 'react-router-dom'

function LinkTextoBotao({to, text}) {
    return (
        <Link to={to} className='btn-texto-botao'>
            {text}
        </Link>
    )
}

export default LinkTextoBotao