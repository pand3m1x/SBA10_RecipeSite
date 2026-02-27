// import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  const Homepage = () => <h2>Home Page</h2>;
  const Favorites = () => <h2>Favorites</h2>;  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/homepage" element={<Homepage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
    </>
  )
}

export default App
