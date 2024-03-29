import { Outlet } from "react-router-dom";
import Herder from "../component/Herder";



const Root = () => {
  return (
    <div>
      <div>
        <Herder></Herder>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
