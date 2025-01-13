import {data} from "./data/data";
import ImcCalc from './components/ImcCalc';

import ImcTable from './components/ImcTable';
import { useState } from 'react'

import './App.css';

function App() {

  function calcImc(e){
    e.preventDefault();
    console.log("executar")
  }

  const [imc, setImc]=useState("");
  const [info,setInfo]=useState("");
  const [infoClass,setInfoClass]=useState("");
  
  return <div className='container'>{!imc ? <ImcCalc calcImc={calcImc}/> : <ImcTable/> }</div>
  
}

export default App
