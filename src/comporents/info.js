import React from 'react'
import './style.css'


function Info({ info, state }) {

  // console.log({ info })


  return (
      
    <div>
     { 
     /* veri bos gelince hata veriyor onun kontorlu */
     state ?
      <div className='info'>
        <p id='sehir'> {info.name} ,{info.sys.country} </p>
        <div className='genelDeger'>
          <p id='sicaklik'>{info.main.temp} </p>

        </div>
        <p id='havaDurumu'> {info.weather[0].description} </p>
        <div>
          <p id='hissedilen' >{info.main.feels_like} </p>

        </div>
      </div> : null
      
      } 
      
    </div>
  )
}

export default Info
