import { Link } from "react-router-dom";

const Navbar = () => {
  return <div>navbar 
    <Link to={'/'}>task</Link>
    <Link to={'/user'}>User</Link>
  </div>;
};

export default Navbar;
