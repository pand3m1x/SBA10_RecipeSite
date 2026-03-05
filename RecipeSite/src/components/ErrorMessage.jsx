import brokenPlate from "../assets/broken-plate.jpg";


function ErrorMessage(){
  return(
    <div style={{border:"2px solid red", padding:"10px", margin:"10px"}}>
      <h2>Error</h2>
      <p>The dish is missing or broken :( </p>
      <img src={brokenPlate} alt="broken dish" style={{ width: "400px", borderRadius:"100px" }} />
    </div>
  )
}

export default ErrorMessage