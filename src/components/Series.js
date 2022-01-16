import React, { useState } from "react";
import SriesCards from "./SeriesCards";

function Series() {
  const [Series, setSeries] = useState([
    {
      Image:
        "https://fr.web.img6.acsta.net/c_310_420/pictures/18/11/13/14/05/2764761.jpg",
      Name: "Frinds",
      year: "1994",
      rating: 3,
    },
    {
      Image:
        "http://fr.web.img2.acsta.net/r_534_x/pictures/210/435/21043550_20130924171313362.jpg",
      Name: "Supernature",
      year: "2013",
      rating: 2,
    },
    {
      Image:
        "https://images.affiches-et-posters.com//albums/3/3888/affiche-serie-revolution-1702.jpg",
      Name: "Revolution",
      year: "2013",
      rating: 5,
    },
    {
      Image:
        "https://i.pinimg.com/550x/fb/87/be/fb87be903d6f00edaf05e56df45585c3.jpg",
      Name: "Nortel",
      year: "2013",
      rating: 4,
    },
    {
      Image: "https://fr.shopping.rakuten.com/photo/1229682875_L.jpg",
      Name: "Hippocrate",
      year: "2013",
      rating: 1,
    },
  ]);
  return (
    <div className="cards">
      {Series.map((el) => (
        <SriesCards series={el} />
      ))}
    </div>
  );
}

export default Series;
