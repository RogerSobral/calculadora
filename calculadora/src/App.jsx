import {data} from "./data/data";
import ImcCalc from './components/ImcCalc';

import ImcTable from './components/ImcTable';
import { useState } from 'react'

import './App.css';

function App() {

  function calcImc(e, height,weight){
    e.preventDefault();

    // O sinal de mais converte para float
    const weightFloat= +weight.replace(",",".");
    const heightFloat= +height.replace(",",".");

    const imcResult= (weightFloat/(heightFloat*heightFloat)).toFixed(1);

    if(!weight && !height) return;

    setImc(imcResult)

    data.forEach((item)=>{
      if(imcResult >=item.min && imcResult<=item.max){
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
// Caso o usuario entre com dados fora do intervalo
    if (!info) return;
  }

  const resetCalc=(e)=>{
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc]=useState("");
  const [info,setInfo]=useState("");
  const [infoClass,setInfoClass]=useState("");
  
  return <div className='container'>{!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/> }</div>
  
}

export default App
