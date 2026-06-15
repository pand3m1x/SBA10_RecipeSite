import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/category/:categoryName" element={<Category />}></Route>
        <Route path="/recipe/:recipeId" element={<Recipe />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </>
  );
}

export default App;
