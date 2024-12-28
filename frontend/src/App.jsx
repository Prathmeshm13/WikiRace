import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Home';
import GamePlay from './GamePlay';
import WikiLinks from './wikiLinks';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/gameplay' element={<GamePlay/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
