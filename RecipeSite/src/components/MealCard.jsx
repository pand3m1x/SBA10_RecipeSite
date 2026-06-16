import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIngredients } from "../utils/ingredients";
import { isFavoriteMeal, toggleFavoriteMeal } from "../utils/favorites";

function MealCard({ meal }) {
  // const [fullMeal, setFullMeal] = useState(meal);
  const [favorite, setFavorite] = useState(() => isFavoriteMeal(meal.idMeal));

  // useEffect(() => {
  //   let ignoreRequest = false;

  //   if (meal.strIngredient1) return;

  //   fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!ignoreRequest && data.meals) {
  //         setFullMeal(data.meals[0]);
  //       }
  //     })
  //     .catch((err) => console.error(err));

  //   return () => {
  //     ignoreRequest = true;
  //   };
  // }, [meal]);

  useEffect(() => {
    const syncFavorite = () => setFavorite(isFavoriteMeal(meal.idMeal));

    window.addEventListener("favoritesUpdated", syncFavorite);
    return () => window.removeEventListener("favoritesUpdated", syncFavorite);
  }, [meal.idMeal]);

  // const displayedMeal = meal.strIngredient1 ? meal : fullMeal;
  // const ingredients = getIngredients(displayedMeal).slice(0, 5);

  const handleFavoriteClick = (event) => {
    event.preventDefault();
    setFavorite(toggleFavoriteMeal(meal));
  };

  return (
    <article className="meal-card">
      <Link to={`/recipe/${meal.idMeal}`}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <h3>{meal.strMeal}</h3>
      </Link>
      <button
        className="favorite-button"
        type="button"
        onClick={handleFavoriteClick}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★ Favorited" : "☆ Favorite"}
      </button>
      {/* {ingredients.length > 0 && (
        <ul className="ingredient-preview">
          {ingredients.map((item) => (
            <li key={item.ingredient}>{item.label}</li>
          ))}
        </ul>
      )} */}
    </article>
  );
}

export default MealCard;
