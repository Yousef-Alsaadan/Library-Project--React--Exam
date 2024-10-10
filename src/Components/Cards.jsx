import React from "react";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div>
      <div className="card card-side bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="h-[200px] w-[150px] object-cover" src={props.bookImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.bookTitle}</h2>
          <p>{props.bookAuthor}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/details/${props.bookTitle}`}
              className="btn btn-primary"
            >
              Read..
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
