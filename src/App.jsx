import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card';
import './App.css';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega'

export default () => 
<div className="App">
  <div className="Cards">
  <Card titulo="#01 - Primeiro Componente" color="#f6393c">
      <Primeiro/>
    </Card>
    <Card titulo="#02 - Component com parâmetro" color="#e07f16">
      <ComParametro titulo="Esse é um titulo" subtitulo="Esse é o subtítulo"/> 
    </Card>
    <Card titulo="#03 - Componente com filhos" color="#e0168f">
      <ComFilhos>
        <ul>
          <li>Ana</li>
          <li>Bia</li>
          <li>Carlos</li>
          <li>Manuel</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card titulo="#04 - Repetição" color="#390060">
      <Repeticao></Repeticao>
    </Card>
    <Card titulo="#05 - Condicional v1" color="#005592">
      <Condicional numero={11}></Condicional>
    </Card>
    <Card titulo="#06 - Condicional v2" color="#e01646">
      <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>
    <Card titulo="#07 - Comunicação direta" color="#8ec127">
      <Pai sobrenome="Freitas"></Pai>
    </Card>
    <Card titulo="#08 - Comunicação indireta" color="#a200ff">
      <Super></Super>
    </Card>
    <Card titulo="#09 - Input" color="#b48811">
      <Input></Input>
    </Card>
    <Card titulo="#10 - Contador" color="#009688">
      <Contador passo={10} valor={100}></Contador>
    </Card>
    <Card titulo="#11 - Numeros da mega sena" color="#03396c">
      <Mega qtdNumero={6}></Mega>
    </Card>
  </div>
</div>
