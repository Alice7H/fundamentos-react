import React, {useState} from 'react'

export default (props) => {

    const [numero, setNumero] = useState(Array(props.qtdNumero).fill(0))

    function gerarNumero() {
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce(a => [...a, gerarNumeroNaoContido(a)], [])
            .sort((a, b) => a - b )

        setNumero(novoArray)
    }

    function gerarNumeroNaoContido(array){
        const min = 1
        const max = 60
        const novoNumero = parseInt(Math.random() * (max - min) + min)
        return array.includes(novoNumero) ? gerarNumeroNaoContido(array) : novoNumero
    }

    return(
        <>  
            {/* Gerar array de 6 posições de 1 a 60 sem repeticao */}
            <h3>Mega</h3>
            <h4>{numero.join(" - ")}</h4>
            <button onClick={gerarNumero}>Gerar Números</button>

        </>
    )
}