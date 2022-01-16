import ReactStars from "react-rating-stars-component";
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";

function MovieCard({ movie }) {
  return (
    <div>
      <div className="card">
        <div className="container">
          <Link to="/description" state={{ movie: movie }}>
            <img variant="top" src={movie.image} className="img" />
            <div class="middle">
              <div class="text">See More</div>
            </div>
          </Link>
        </div>
        <div className="bodycard">
          <div className="Title">{movie.name}</div>
          <div className="Text">{movie.year}</div>
          <div className="stars">
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
