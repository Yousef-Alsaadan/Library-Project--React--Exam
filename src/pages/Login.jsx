import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://670438ecab8a8f89273356ec.mockapi.io/users")
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const submit = () => {
    if (userName === "" || pass === "") {
      errorLog("Please fill in all fields!");
      return;
    }

    const user = users.find((data) => data.user === userName);
    if (!user) {
      errorLog("Username is not found!");
      return;
    }

    if (user.pass !== pass) {
      errorLog("The password is wrong!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ user: user.user }));

    navigate("/");
  };

  const errorLog = (text) => {
    setError(text);
  };

  return (
    <div className="bg-[#F8F7F6]">
      <div
        className="h-screen bg-no-repeat bg-left-bottom"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/enabled_hi/564x/6b/34/d9/6b34d947b883f1e2523100a155b1661f.jpg)",
        }}
      >
        <div className="flex flex-col gap-3 justify-center items-center h-[80vh] georgian_font">
          <h1 className="font-bold text-2xl mb-4">Log In</h1>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="password"
              className="grow"
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </label>

          <p className="text-red-700">{error}</p>

          <button
            onClick={submit}
            className="bg-white px-12 py-2 input input-bordered hover:bg-[#F8F7F6]"
          >
            Submit
          </button>

          <p className="text-sm">
            I don't have account?{" "}
            <span className="hover:text-blue-600 hover:underline">
              <Link to="/signin">Signin</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
