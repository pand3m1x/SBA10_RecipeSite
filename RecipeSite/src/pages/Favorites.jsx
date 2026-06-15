import { useEffect, useState } from "react";
import MealCard from "../components/MealCard";
import Spinner from "../components/Spinner";
import { getFavorites } from "../utils/favorites";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = () => {
      setLoading(true);
      setFavorites(getFavorites());
      setLoading(false);
    };

    loadFavorites();
    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => window.removeEventListener("favoritesUpdated", loadFavorites);
  }, []);

  if (loading) return <Spinner />;

  return (
    <div style={{ border: "2px solid blue" }}>
      <h2>Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some recipes with the favorite button.</p>
      ) : (
        <div className="meal-grid">
          {favorites.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
