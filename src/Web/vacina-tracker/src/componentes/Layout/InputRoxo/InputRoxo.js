import './InputRoxo.css'

function InputRoxo({ type, text, name, placeholder, handleOnChange, value}) {
    return(
        <div className='form-control-roxo'>
            <label for={name}>{text}</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    )
}

export default InputRoxo