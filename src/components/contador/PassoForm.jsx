import React from 'react'

export default (props) =>{

    return(
        <>
            <div>
                <label>Passo:</label>
                <input id="passoInput"  type="number" 
                    className="fonte-texto"                       
                    value={ props.passo} 
                    onChange={ e => props.onPassoChange(+e.target.value)}/>             
            </div>
        </>
    )
}