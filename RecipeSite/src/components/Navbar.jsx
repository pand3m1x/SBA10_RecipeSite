import { Link } from 'react-router-dom';

// favorites
//home


function Navbar(){
  return(
    <nav id="Nav" style={{border:"2px solid red"}}>
      <ul style={{listStyle:"none"}}>
        <li><Link to="/Homepage">Home</Link></li>
        {"|"}
        <li><Link to="/Favorites">Favorites☆</Link></li>
        <li><form><input type="text" placeholder="search for recipe"/></form></li>
        <li><button>Search</button></li>
      </ul>
    </nav>
  );
}

export default Navbar