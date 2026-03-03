import { useEffect,useState } from 'react';
import { useParams } from 'react-router';

function Recipe(){

    const [recipe,setRecipe] = useState([]);
    const {recipeId} = useParams(`/${idMeal}`);
    console.log(recipeId);

    useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`) //"idMeal": "53147"
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);
        setRecipe(data.recipe);
      })
      .catch((err) => console.error(err));
    }, []);
    
  return( 
  <>
    <div style={{border:"2px solid lightBlue"}}>
      <h2>{recipe}</h2>
      {/* <div id="recipe" style={{}}>
          {meals.map((meal) => (<div key={meal.idMeal}>
          </div>))}
      </div> */}
    </div>
  </>
  );
}

export default Recipe