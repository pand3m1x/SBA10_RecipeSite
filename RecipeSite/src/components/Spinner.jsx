import { RotatingLines } from "react-loader-spinner";

function Spinner(){
  return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"250px"}}>
      <RotatingLines 
        strokeColor="lightBlue"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}>
      </RotatingLines>
    </div>
  );
}

export default Spinner