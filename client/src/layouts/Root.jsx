import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <div>
        {/* Navar Components Here  */}
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
