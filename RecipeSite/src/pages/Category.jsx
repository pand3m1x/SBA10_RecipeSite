import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import MealCard from "../components/MealCard";

function Category() {
  const { categoryName } = useParams();
  const [categoryState, setCategoryState] = useState({
    meals: [],
    categoryName: "",
    error: false,
  });

  useEffect(() => {
    let ignoreRequest = false;

    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (ignoreRequest) return;

        if (!data.meals) {
          setCategoryState({ meals: [], categoryName, error: true });
          return;
        }

        setCategoryState({ meals: data.meals, categoryName, error: false });
      })
      .catch((err) => {
        console.error(err);
        if (!ignoreRequest) {
          setCategoryState({ meals: [], categoryName, error: true });
        }
      });

    return () => {
      ignoreRequest = true;
    };
  }, [categoryName]);

  const loading = categoryState.categoryName !== categoryName;

  if (categoryState.error) return <ErrorMessage />;
  if (loading) return <Spinner />;

  return (
    <div style={{ backgroundColor: "white" }}>
      <h2>{categoryName} Recipes</h2>
      <div id="mealsMenu">
        {categoryState.meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default Category;
