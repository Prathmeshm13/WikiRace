import React from 'react'
import { useNavigate } from 'react-router-dom'
import GamePlay from './GamePlay';
import './App.css'
function Home() {
const navigate=useNavigate();
let start='Nagpur'
function handleStart(){
    navigate('/gameplay', { state: { start } })
}
  return (
    <>
    <div>Home</div>
    <h1>Wiki Race</h1>
    <h2>Starting Point: {start}</h2>
    <h2>Destination: Vivo</h2>
    <button onClick={handleStart}>Start</button>
    </>
  )
}

export default Home