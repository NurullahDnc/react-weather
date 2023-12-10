import { useState } from 'react';
import './App.css';
import Form from './comporents/Form'
import Info from './comporents/info'

function App() {
  //formdan degerleri alıcaz infoya gondericez
  const [info, setInfo] = useState([])

  // sayfa yenilendiginde hata veriyor, hava durumu verileri gitmedigi icin
  const [state, setState] =useState(false)

  return (
    <div className="App">
     <Form setInfo = {setInfo} setState = {setState} /> 
     <Info info = {info} state ={state} />
     
    </div>
  );
}

export default App;
