import { NavLink } from "react-router-dom"

const NavBar = () => {
  const activeMenu = ({ isActive }) => isActive ? "active-navlink" : "";

  return (
    <nav>
      <ul>
        <li>
          <NavLink activeClassName={activeMenu} exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName={activeMenu} to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink activeClassName={activeMenu} to="/posts">Posts</NavLink>
        </li>
        <li>
          <NavLink activeClassName={activeMenu} to="/postPush">PostsPush</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
