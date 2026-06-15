import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import MealCard from "../components/MealCard";
import Spinner from "../components/Spinner";

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setMeals([]);
      return;
    }

    const searchRecipes = async () => {
      setLoading(true);
      setError(false);

      try {
        const recipeResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`,
        );
        const recipeData = await recipeResponse.json();

        if (recipeData.meals) {
          setMeals(recipeData.meals);
          return;
        }

        const ingredientResponse = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`,
        );
        const ingredientData = await ingredientResponse.json();
        setMeals(ingredientData.meals || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    searchRecipes();
  }, [query]);

  if (error) return <ErrorMessage />;
  if (loading) return <Spinner />;

  return (
    <div style={{ border: "2px solid blue" }}>
      <h2>Search Results for {query}</h2>
      {!query.trim() && <p>Use the search box to find recipes.</p>}
      {query.trim() && meals.length === 0 && <p>No matching recipes found.</p>}
      {meals.length > 0 && (
        <div className="meal-grid">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
