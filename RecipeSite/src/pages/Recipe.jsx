import { useEffect,useState } from 'react';
import { useParams } from 'react-router';
import RecipeCard from '../components/RecipeCard'


function Recipe(){

    const [ recipe,setRecipe ] = useState([]);
    const { recipeId } = useParams();
    
    console.log("Recipe", recipeId);

    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`) //"idMeal": "53147"
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setRecipe(data.meals ? data.meals[0] : null);
      })
      .catch((err) => console.error(err));
    }, [recipeId]);
    
  return( 
  <>
    <div style={{border:"2px solid lightBlue"}}>
      <h2>How to make {recipe.strMeal}</h2>
      <RecipeCard></RecipeCard>
    </div>
  </>
  );
}

export default Recipe