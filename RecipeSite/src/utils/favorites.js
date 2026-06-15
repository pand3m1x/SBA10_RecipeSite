const FAVORITES_KEY = "recipeSiteFavorites";

export function getFavorites() {
  const savedFavorites = localStorage.getItem(FAVORITES_KEY);

  if (!savedFavorites) return [];

  try {
    return JSON.parse(savedFavorites);
  } catch (error) {
    console.error("Could not load favorites:", error);
    return [];
  }
}

export function saveFavorites(favorites) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  window.dispatchEvent(new Event("favoritesUpdated"));
}

export function isFavoriteMeal(mealId) {
  return getFavorites().some((meal) => meal.idMeal === mealId);
}

export function toggleFavoriteMeal(meal) {
  const favorites = getFavorites();
  const isAlreadyFavorite = favorites.some(
    (favorite) => favorite.idMeal === meal.idMeal,
  );

  const updatedFavorites = isAlreadyFavorite
    ? favorites.filter((favorite) => favorite.idMeal !== meal.idMeal)
    : [...favorites, meal];

  saveFavorites(updatedFavorites);
  return !isAlreadyFavorite;
}
