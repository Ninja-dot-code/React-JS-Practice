import { useState } from 'react'
import './App.css'

function App() {
let [counter,setCounter] = useState(15)

const valueadd =function(){
  
  setCounter(counter + 1)
 
}
const removeValue =function(){
  if(counter > 0){
    setCounter(counter - 1)

  }
  else{
    alert('Cannot remove further')
  }
  
 
}

  return (
    <>
     <h1>React Counter Project</h1>
     <h2>counter Value : {counter}</h2>
     <button
     onClick={valueadd}
     >Add Value: {counter}</button>
   <br/>
     <button
     onClick={removeValue}
     
     >Remove Value : {counter}</button>
    </>
  )
}

export default App
