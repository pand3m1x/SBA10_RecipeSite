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
      <div id="categoryMenu" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px"}}>
          {categories.map((category) => (<div key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`}>
              <div id="individualCategory" style={{border:"1px solid pink",padding:"4px"}}>
                <img src={category.strCategoryThumb} alt={category.strCategory} style={{ width: "100%" }} />
                <h3>{category.strCategory}</h3>
                {/* <div style={{border:"2px solid gray"}}><p onHover={}>{category.strCategoryDescription}</p></div> */}
              </div>
            </Link>
          </div>))}
            {/* <div id="categoryMenuDescript" style={{border:"2px solid gray"}}>
              {categories.map((category) => (<div key={category.idCategory}>
                <p>{category.strCategoryDescription}</p>
                </div>))}
            </div> */}
      </div>
    </div>
  );
}

export default Homepage



// <p>{category.strCategoryDescription}</p>

// line 37 onClick={goToCategory}