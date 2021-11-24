import { Outlet } from "react-router";
import Header  from "./Header";
const DefaultLeyout=()=>{
  return(
      <>
      <Header></Header>
      <div className="container">
          <Outlet/>
      </div>
      </>
  );
}

export default DefaultLeyout;