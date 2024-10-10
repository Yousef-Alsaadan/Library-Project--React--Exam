import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detaile() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [userdata, setUserdata] = useState([]);

  let { id } = useParams();

  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=0NkZqpLzOdiQl1MjfUoHtV9AYrx5Jzy5"
      )
      .then(function (response) {
        const foundbook = response.data.results.lists[0].books.find(
          (i) => i.title === id
        );
        if (foundbook) {
          setBooks(foundbook);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://670438ecab8a8f89273356ec.mockapi.io/users")
      .then(function (response) {
        const user = response.data.find((data) => data.user === userData.user);
        if (user) {
          setUserdata(user);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

    function addfovret() {
      axios
        .put(`https://670438ecab8a8f89273356ec.mockapi.io/users/${userData.id}`, {
          Favorite: [],
          Read: [],
        })
        .then(function (response) {
          navigate("/");
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  return (
    <div>
      <Navbar style="bg-base-200" />

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={books.book_image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{books.title}</h1>
            <p>by {books.author}</p>

            <p className="py-6">{books.description}</p>

            <a
              target="_blank"
              href={books.amazon_product_url}
              className="btn btn-primary"
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detaile;
