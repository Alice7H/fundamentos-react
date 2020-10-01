import React from 'react';
import produtos from '../data/products';

export default () => {

    function getProdutosListItem() {
        return produtos.map(prod =>{
            return <li key={prod.id}>{prod.id} - {prod.nome} -&gt; R$ {prod.preco}</li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
}