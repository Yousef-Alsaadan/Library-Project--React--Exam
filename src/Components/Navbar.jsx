import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <div className={`${props.style} navbar bg-transparent georgian_font`}>
        <div className="flex-1">
          <Link to="/" className={`font-bold text-xl ${props.style}`}>
            MyLibraryList
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              <li className={!userData ? "hidden" : ""}>
                <button>Favorite Books</button>
              </li>

              <li className={!userData ? "hidden" : ""}>
                <button>Read Books</button>
              </li>

              <li className={!userData ? "hidden" : ""}>
                <button onClick={logout}>Logout</button>
              </li>

              <li className={userData ? "hidden" : ""}>
                <Link to="/login">Login | Signin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
