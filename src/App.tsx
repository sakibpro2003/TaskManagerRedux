import { Outlet } from "react-router-dom";
import Navbar from "./component/shared/Navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Button>clidkc</Button>
    </>
  );
}

export default App;
