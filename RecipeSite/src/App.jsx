// import { useState } from 'react'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
// import Favorites from '.pages/Favorites';
// import Categories from '.pages/Categories';
// import Recipe from '.pages/Recipe';
// import Search from './pages/Search'


function App() {
  const Favorites = () => <h2>Favorites</h2>;  
  const Category = () => <h2>Category</h2>;
  const Recipe = () => <h2>Recipe</h2>;
  const Search = () => <h2>Search</h2>;

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/category/[categoryName]" element={<Category />}></Route>
        <Route path="/recipe/[recipeId]" element={<Recipe />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  )
}

export default App

// www.themealdb.com/api/json/v1/1/categories.php