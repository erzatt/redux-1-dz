import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <span>Classes will be 2 hours on Wednesday and Saturday</span>
      </footer>
    </div>
  );
}

export default Layout;
