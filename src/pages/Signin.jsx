import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Logs() {
  const [email, setEmail] = useState("");
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

    if (userName.length < 3) {
      errorLog("Username must be more than 3 characters!");
      return;
    }

    if (pass.length < 8) {
      errorLog("Password must be more than 8 characters!!");
      return;
    }

    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      errorLog("Write a valid email address!!");
      return;
    }

    const user = users.find((data) => data.user === userName);
    if (user) {
      errorLog("Username is not taken!");
      return;
    }

    axios
      .post("https://670438ecab8a8f89273356ec.mockapi.io/users", {
        email: email,
        user: userName,
        pass: pass,
        Favorite: [],
        Read: [],
      })
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify({ user: userName }));

        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <h1 className="font-bold text-2xl mb-4">Sign In</h1>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
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
            Already have account?{" "}
            <span className="hover:text-blue-600 hover:underline">
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Logs;
