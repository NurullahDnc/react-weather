import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios'

function Form({info, setInfo, setState}) {

    const [city, setCity] = useState("");

    /*useEffesct, city state degistiginde calısacak    --- denemek icin kulanıldı */
    useEffect(()=>{
        // console.log(info)  
    },[info])  
    

    const handleChange =async ()=>{

        const api = "56af594507d4f0a2fe11cc7c7be8a88f"
        const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric&lang=tr`
        await axios.get(baseURL) .then((res)=>{setInfo(res.data)})   
        .catch((err)=>{alert("no ")}) 
        setState(true)
    }


  return (
    <div>
        <h1>Hava Durumu</h1>
        <form onSubmit={(e)=> {e.preventDefault(); handleChange()}}>
            <div className='form'>
                <input onChange={(e)=>{setCity(e.target.value)}} className='inputText' type='text' placeholder='Sehir Giriniz' ></input>
            </div>
            <div className='btnDiv'>
                <button type='submit' className='btn ' > veri getir</button>
            </div>
        </form>
      
    </div>
  )
}

export default Form


/*onSubmit form submit oldugunda calsıyor */