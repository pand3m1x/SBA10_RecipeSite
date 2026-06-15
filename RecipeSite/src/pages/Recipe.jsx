import { useEffect, useState } from "react";
import { useParams } from "react-router";
import RecipeCard from "../components/RecipeCard";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Recipe() {
  const { recipeId } = useParams();
  const [recipeState, setRecipeState] = useState({
    recipe: null,
    recipeId: "",
    error: false,
  });

  useEffect(() => {
    let ignoreRequest = false;

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        if (ignoreRequest) return;

        if (!data.meals) {
          setRecipeState({ recipe: null, recipeId, error: true });
          return;
        }

        setRecipeState({ recipe: data.meals[0], recipeId, error: false });
      })
      .catch((err) => {
        console.error(err);
        if (!ignoreRequest) {
          setRecipeState({ recipe: null, recipeId, error: true });
        }
      });

    return () => {
      ignoreRequest = true;
    };
  }, [recipeId]);

  const loading = recipeState.recipeId !== recipeId;

  if (recipeState.error) return <ErrorMessage />;
  if (loading) return <Spinner />;

  return (
    <div style={{ border: "2px solid lightBlue" }}>
      <h2>How to make {recipeState.recipe.strMeal}</h2>
      <RecipeCard recipe={recipeState.recipe}></RecipeCard>
    </div>
  );
}

export default Recipe;
