import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";
// import Favorites from '.pages/Favorites';
// import Search from './pages/Search'

function App() {
  const Favorites = () => <h2>Favorites</h2>;
  // const Category = () => <h2>Meals</h2>;
  // const Recipe = () => <h2>Recipe</h2>;
  const Search = () => <h2>Search</h2>;

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

// www.themealdb.com/api/json/v1/1/categories.php

// {
//   console.log("clicked:")
// const { categoryName } = useParams(); //categoryName matches category url Does this need to be in category?
// return <h2> Meals: </h2>
// }
