import './LinkTexto.css'
import { Link } from 'react-router-dom'

function LinkTexto({to, text}) {
    return (
        <Link to={to} className='btn-texto'>
            {text}
        </Link>
    )
}

export default LinkTexto