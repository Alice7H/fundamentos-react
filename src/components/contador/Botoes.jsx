import React from 'react'

export default (props) =>{

    return(
        <>
            <button onClick={e => props.onInc(e)}>Incrementa</button>
            <button onClick={props.onDec}>Decrementa</button>
        </>
    )
}