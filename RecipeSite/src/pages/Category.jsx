// https://www.themealdb.com/api/json/v1/1/categories.php
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Category(){

  const [meals,setMeals] = useState([]);

  // const Meal = () => {
  const {categoryName} = useParams(); //categoryName matches category url
  // return <h2>{ categoryName } Meals: </h2>
  // }
  console.log(categoryName);

    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("API Data:", data);
          setMeals(data.meals);
        })
        .catch((err) => console.error(err));
      }, []);

  return(
    <>
      <div style={{border:"2px solid blue"}}>
      <h2>{categoryName} Recipe</h2>
      {/* <p>{category.strCategoryDescription}</p> */}
      <div id="mealsMenu" style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px"}}>
          {meals.map((meal) => (<div key={meal.idMeal}>
          <Link to={`/recipe/${meal.strMeal}`}>
          <div id="individualCategory" style={{border:"1px solid pink",padding:"4px"}}>
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100%" }} />
            <h3>{meal.strMeal}</h3>
            </div></Link>
          </div>))}
      </div>
    </div>
    </>
  );
}

export default Category

// beef
// chicken
// dessert
// lamb
// miscellaneous
// pasta
// pork
// seafood
// side
// starter
// vegan
// vegetarian
// breakfast
// goat