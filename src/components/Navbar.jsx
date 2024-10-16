import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Navbar = () => {
  const {LoginUserinfo} = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
    });
  };

  const navlist = <>
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </>

  const navRightList = (
    <>
      <li className="menu">
        <NavLink to="/signup">SIGN UP</NavLink>
      </li>
      <li className="menu">
        {LoginUserinfo ? (
          <span>
            {LoginUserinfo.email}
            <button onClick={handleLogOut}>Logout</button>
          </span>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </li>
    </>
  );


  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlist}
          </ul>
        </div>
        <div className="navbar-end">
          {navRightList}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
