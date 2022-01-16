import React, { useState } from "react";
import MovieCards from "./MovieCards";
import ReactStars from "react-rating-stars-component";

function MovieListe({ text, ratee }) {
  const [Liste, setListe] = useState([
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 4,
      year: "2005",
    },
    {
      name: "Black Water",
      image:
        "https://fr.web.img2.acsta.net/pictures/18/06/25/09/52/4552808.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 3,
      year: "2018",
    },
    {
      name: "Kong: Skull Island",
      image: "https://fr.web.img4.acsta.net/pictures/17/02/24/14/49/440855.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 2,
      year: "2017",
    },
    {
      name: "The Tomorrow War",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk",
      description: "jhjhfhfhg",
      rating: 5,
      year: "2021",
    },
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 4,
      year: "2005",
    },
    {
      name: "Tyler Rake",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA99DbYdkt4Fr2bsM83REr8XbUbiQqXKkdKB5pyaRU3kBCQBXp",
      description: "jhjhfhfhg",
      rating: 1,
      year: "2020",
    },
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 4,
      year: "2005",
    },
    {
      name: "Black Water",
      image:
        "https://fr.web.img2.acsta.net/pictures/18/06/25/09/52/4552808.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 3,
      year: "2018",
    },
    {
      name: "Kong: Skull Island",
      image: "https://fr.web.img4.acsta.net/pictures/17/02/24/14/49/440855.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 2,
      year: "2017",
    },
    {
      name: "The Tomorrow War",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhotZZ36j8rndD5i2OG1scehoqeH_m7uLmohqF-yDDfR8X7kFk",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 5,
      year: "2021",
    },
    {
      name: "Inception",
      image:
        "https://starzplay-img-prod-ssl.akamaized.net/474w/WarnerBrothers/INCEPTIONY2010M/INCEPTIONY2010M-474x677-PST.jpg",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 4,
      year: "2005",
    },
    {
      name: "Tyler Rake",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA99DbYdkt4Fr2bsM83REr8XbUbiQqXKkdKB5pyaRU3kBCQBXp",
      description:
        "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.",
      rating: 1,
      year: "2020",
    },
  ]);
  return (
    <div>
      <div className="search"></div>
      <div className="cards">
        {Liste.filter(
          (el) =>
            el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) &&
            el.rating >= ratee
        ).map((el) => (
          <MovieCards movie={el} />
        ))}
      </div>
    </div>
  );
}

export default MovieListe;
