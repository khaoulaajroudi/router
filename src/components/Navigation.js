import React, { useState } from "react";
import { FaHouzz, FaFilm, FaHeart } from "react-icons/fa";
import { FcFilmReel, FcSearch } from "react-icons/fc";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Series from "./Series";
import Favories from "./Favories";

function Navigation({ newtext, newrate }) {
  return (
    <div>
      <div className="navbar">
        <ul>
          <label>
            <FcFilmReel className="icon" />
            MovieFilm
          </label>
          <li>
            {" "}
            <Link to="/">
              <FaHouzz className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/series">
              <FaFilm className="icon" />
              Séries
            </Link>
          </li>
          <li>
            <Link to="/Favories">
              <FaHeart className="icon" />
              Favoris
            </Link>
          </li>
          <li className="sea">
            <FcSearch className="icon" />
            <input
              type="text"
              placeholder="search"
              onChange={(e) => newtext(e.target.value)}
            />
            <ReactStars
              count={5}
              onChange={newrate}
              size={24}
              activeColor="#ffd700"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;
