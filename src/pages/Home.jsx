import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Cards from "../Components/Cards";
import axios from "axios";

function Home() {
  const [books, setBooks] = useState([]);
  const [ser, setSer] = useState("");

  const foundbook = books.filter(
    (i) => i.title && i.title.toLowerCase().includes(ser.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=0NkZqpLzOdiQl1MjfUoHtV9AYrx5Jzy5"
      )
      .then(function (response) {
        setBooks(response.data.results.lists[0].books);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="georgian_font scroll-smooth">
      <Navbar style="text-neutral-content absolute" />

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/736x/e6/09/b0/e609b07c13da0d21e78cae4a0b2a5de3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">MyLibraryList</h1>
            <p className="mb-5">
              Welcome to MyLibraryList. Here you can explore a diverse
              collection of books and build your own library of your favorite
              books.
            </p>
            <a href="#cards">
              <button className="btn btn-primary">Explore</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto h-screen mt-8 p-4" id="cards">
        <div className=" flex justify-between">
          <h1 className="text-2xl font-bold">Library </h1>

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={(e) => setSer(e.target.value)}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {foundbook.map((i, index) => {
            return (
              <Cards
                key={index}
                bookImg={i.book_image}
                bookTitle={i.title}
                bookAuthor={i.author}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
