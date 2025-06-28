import { Outlet } from "react-router-dom";
import Navbar from "./component/shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
