import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './css/App.css'



// TODO: localStorage 


export const App  = () => {
  const storageLicznik = localStorage.getItem("licznik") || 0        
  const [licznik,setLicznik] = useState(parseInt(storageLicznik))    //* storage odczytuje się prawidłowo 

  const storageHistoria = localStorage.getItem("historia") || ``
  const [historia, setHistoria] = useState(storageHistoria)


  

  const zwieksz = (x) => {
    setLicznik(licznik+x)

    setHistoria(historia + "\n"+ x)

    let ta = document.getElementById("recent")
    ta.scrollTop = ta.scrollHeight;
  }




 const handleClick = (e) => {
    if(e.shiftKey) 
    {
      if(e.button === 0) zwieksz(10)
      if(e.button === 2) zwieksz(-10)
      if(e.button === 1) zwieksz(-5)
    }
    else
    {
      if(e.button === 0) zwieksz(1)
      if(e.button === 2) zwieksz(-1)
      if(e.button === 1) zwieksz(5)
    }
 } 



 const handleReset = (e) => {
  setLicznik(0)
  let ta = document.getElementById("recent")
  ta.scrollTop = ta.scrollHeight;
  setHistoria(historia + "\n--zresetowano licznik--") 
  if(e.shiftKey) setHistoria(``)
 }


 const handleInfo = () => {
    setHistoria(historia + "\n" + reprInfo)
 }

  return (
    <div className='overlay'>
      
      <div className='countRoot'>
        <div className="windowCount">{licznik}</div>
        <div className='ops'>
          <button onClick={(e)=>handleClick(e)} onAuxClick={(e)=>handleClick(e)} id="plus">+</button> <button onClick={(e)=>handleReset(e)}>reset</button> <button onClick={()=>handleInfo()}>informacje</button>
          <br/>
        </div>
      </div>

      <div className='history'>
        <label htmlFor="recent">Historia</label><br/>
        <textarea disabled id="recent" value={historia}></textarea>
      </div>
    </div>
  )
}

export default App
