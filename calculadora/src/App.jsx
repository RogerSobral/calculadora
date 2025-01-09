import {data} from "./data/data";
import ImcCalc from './components/ImcCalc';

import ImcTable from './components/ImcTable';
import { useState } from 'react'

import './App.css';

function App() {
  const [imc, setImc]=useState("");
  const [info,setInfo]=useState("");
  const [infoClass,setInfoClass]=useState("");
  
  return <div className='container'>{!imc ? <ImcCalc/> : <ImcTable/> }</div>
  
}

export default App
