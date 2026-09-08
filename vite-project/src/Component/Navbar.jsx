import { NavLink } from "react-router-dom";


// import Alone from "../Pages/Alone.jsx"
import About from "../Pages/About.jsx"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          MyWebsite
        </div>

        <div className="nav-link">
          <NavLink to="/" end>
            Home
          </NavLink>

          {/* <NavLink to="/Categories">
            Categories
          </NavLink> */}

          <NavLink to="/AllBooks">
            All Books
          </NavLink>
          <NavLink to="/Popular_Books">
          Popular Books
          </NavLink>

 <NavLink to="/Contact">
    Contact
 </NavLink>
  

        <NavLink to="/admin/login">
          Admin Login
        </NavLink>
<NavLink to="/register">
  Register
</NavLink>

<NavLink to="/login">
  User Login
</NavLink>
        </div>
      </nav>
  
    </>
  );
}

export default Navbar;