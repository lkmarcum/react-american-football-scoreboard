import React from "react";
import "./App.css";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

const Buttons = () => {
  //   const [homeScore, setHomeScore] = useState(0);
  //   const [awayScore, setAwayScore] = useState(0);
  //   const homeTeam = "Lions";
  //   const awayTeam = "Tigers";
  return (
    <section className="buttons">
      <HomeButtons />
      <AwayButtons />
    </section>
  );
};

export default Buttons;
