import React from 'react'
import {useState} from "react"

function App() {

  const[name,setName]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name)
  }
  
  // const show=(e)=>{
  //   setName(e.target.value)
    
  // }
  console.log(name);

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input onChange={(e)=>setName(e.target.value)} type="text" name="user" placeholder='name' value={name} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App