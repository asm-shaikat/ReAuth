import { Outlet } from "react-router-dom";
import './MainLayout.css';
import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="layout">
      <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
      <p>© 2024 Shaikat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
