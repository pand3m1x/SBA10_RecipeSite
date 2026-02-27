import React from 'react';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
// import Category from './Category'

function Homepage(){

  const [categories,setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setCategories(data.categories);
      })
      .catch((err) => console.error(err));
    }, []);

  return(
    <div style={{border:"2px solid blue"}}>
      <h2>Recipe Categories</h2>
      <div>
        {categories.map((category) => (<div key={category.idCategory}>
          <Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link>
          </div>))}
      </div>
    </div>
  );
}

export default Homepage