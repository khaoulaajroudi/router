import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Description from "./components/Description";
import Favories from "./components/Favories";
import MovieListe from "./components/MovieListe";
import Navigation from "./components/Navigation";
import Series from "./components/Series";

function App() {
  const [text, settext] = useState("");
  const newtext = (x) => {
    settext(x);
  };
  const [ratee, setratee] = useState("");
  const ratingChanged = (newRating) => {
    setratee(newRating);
  };
  return (
    <div className="App">
      <Navigation newtext={newtext} newrate={ratingChanged} />
      <Routes>
        <Route
          exact
          path="/"
          element={<MovieListe text={text} ratee={ratee} />}
        />
        <Route path="/favoris" element={<Favories />} />
        <Route path="/series" element={<Series />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
