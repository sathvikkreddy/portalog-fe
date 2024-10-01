import { Container, Typography } from '@mui/material'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<div>Login</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
