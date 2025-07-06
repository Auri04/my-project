import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import Book from './routes/Book'
import Booking from './routes/Booking'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/:id/book"} element={<Book/>}></Route>
      <Route path={"/equipment-bookings"} element={<Booking/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
