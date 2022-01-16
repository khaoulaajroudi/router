import React from "react";
import { FaCloudDownloadAlt, FaPlay, FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "./Description.css";
import ReactStars from "react-rating-stars-component";

function Description() {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{movie.name}</h1>
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={movie.rating}
              edit={false}
            />
            <div className="card_cat">
              <p className="PG">{movie.year}</p>
              <p className="genre">Action | Adventure </p>
              <p className="time">2h 28m</p>
            </div>
            <p className="disc">
              Ethan Hunt and his IMF team, along with some familiar allies, race
              against time after a mission gone wrong.
            </p>

            <div className="social-btn">
              <button>
                <FaPlay /> SEE TRAILER
              </button>

              <button>
                <FaCloudDownloadAlt /> DOWNLOAD
              </button>

              <button>
                <FaStar />
                {movie.rating}
              </button>
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="affiche">
            <img src={movie.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
