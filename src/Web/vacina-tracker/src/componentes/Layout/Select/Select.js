import './Select.css'

function Select({ text, name, options, handleOnChange, value}) {
    return(
        <div className='form-control'>
            <label for={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}

export default Select