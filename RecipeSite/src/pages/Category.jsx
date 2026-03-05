// https://www.themealdb.com/api/json/v1/1/categories.php
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Category() {
  const [meals, setMeals] = useState([]);
  const { categoryName } = useParams(); //categoryName matches category url
  const [error, setError] = useState(false);

  console.log("Meals:", meals);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        if (!data.meals) {
          setError(true);
          return;
        }
        setMeals(data.meals);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, [categoryName]);

  if (error) return <ErrorMessage />;
  if (meals.length === 0) return <Spinner />;

  return (
    <>
      <div style={{ border: "2px solid blue" }}>
        <h2>{categoryName} Recipes</h2>
        <div
          id="mealsMenu"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              <Link to={`/recipe/${meal.idMeal}`}>
                <div
                  id="individualCategory"
                  style={{ border: "1px solid pink", padding: "4px" }}
                >
                  <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    style={{ width: "50%" }}
                  />
                  <h3>{meal.strMeal}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Category;

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