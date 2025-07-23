import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div id='box'>
        <div id='contener'>
          <button id='redb' style={{backgroundColor: "red"}} onClick={() => setcolor("red")}></button>
        <button id='redb' style={{backgroundColor: "green"}} onClick={() => setcolor("Green")}></button>
        <button id='redb' style={{backgroundColor: "blue"}} onClick={() => setcolor("Blue")}></button>
        <button id='redb' style={{backgroundColor: "black"}} onClick={() => setcolor("Black")}></button>
        <button id='redb' style={{backgroundColor: "white"}} onClick={() => setcolor("white")}></button>
        </div>
      </div>
    </div>
  )
}

export default App
