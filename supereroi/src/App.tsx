import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Supereroe from './routes/Supereroe'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/supereroe/:id"} element={<Supereroe/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
