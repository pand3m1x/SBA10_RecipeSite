import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Category from './Category'
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Data:", data);

        if (!data.categories) {
          setError(true);
          return;
        }
        setCategories(data.categories);
      })

      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }, []);

  if (error) return <ErrorMessage />;
  if (categories.length === 0) return <Spinner />;

  return (
    <div style={{ border: "2px solid blue" }}>
      <h2>Recipe Categories</h2>
      <div
        id="categoryMenu"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {categories.map((category) => (
          <div key={category.idCategory}>
            <Link to={`/category/${category.strCategory}`}>
              <div
                id="individualCategory"
                style={{ border: "1px solid pink", padding: "4px" }}
              >
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  style={{ width: "75%" }}
                />
                <h3>{category.strCategory}</h3>
                {/* <div style={{border:"2px solid gray"}}><p onHover={}>{category.strCategoryDescription}</p></div> */}
              </div>
            </Link>
          </div>
        ))}
        {/* <div id="categoryMenuDescript" style={{border:"2px solid gray"}}>
              {categories.map((category) => (<div key={category.idCategory}>
                <p>{category.strCategoryDescription}</p>
                </div>))}
            </div> */}
      </div>
    </div>
  );
}

export default Homepage;

// <p>{category.strCategoryDescription}</p>

// line 37 onClick={goToCategory}
