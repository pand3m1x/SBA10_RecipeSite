import { useEffect, useState } from "react";
import { getIngredients } from "../utils/ingredients";
import { isFavoriteMeal, toggleFavoriteMeal } from "../utils/favorites";

function RecipeCard({ recipe }) {
  const [favorite, setFavorite] = useState(() => isFavoriteMeal(recipe.idMeal));
  const ingredients = getIngredients(recipe);

  useEffect(() => {
    const syncFavorite = () => setFavorite(isFavoriteMeal(recipe.idMeal));

    window.addEventListener("favoritesUpdated", syncFavorite);
    return () => window.removeEventListener("favoritesUpdated", syncFavorite);
  }, [recipe.idMeal]);

  const handleFavoriteClick = () => {
    setFavorite(toggleFavoriteMeal(recipe));
  };

  return (
    <div className="card" style={{ padding: "50px" }}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={{ width: "200px", borderRadius: "10px" }}
      />
      <div>
        <button type="button" onClick={handleFavoriteClick}>
          {favorite ? "★ Remove Favorite" : "☆ Add Favorite"}
        </button>
      </div>
      <div id="categories">
        <p>
          <i>{recipe.strCategory}</i>
        </p>
        <p>
          <i>{recipe.strArea}</i>
        </p>
      </div>
      <h3>Ingredients</h3>
      <ul className="ingredients-list">
        {ingredients.map((item) => (
          <li key={item.ingredient}>{item.label}</li>
        ))}
      </ul>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeCard;
