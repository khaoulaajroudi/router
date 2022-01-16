import ReactStars from "react-rating-stars-component";
import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ series }) {
  return (
    <div>
      <div className="card">
        <div>
          <img variant="top" src={series.Image} className="img" />
        </div>
        <div className="bodycard">
          <div className="Title">{series.Name}</div>
          <div className="Text">{series.year}</div>
          <div className="stars">
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={series.rating}
              edit={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
