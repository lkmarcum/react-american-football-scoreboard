import React, { useState } from "react";
import "./App.css";

const TopRow = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTeam = "Lions";
  const awayTeam = "Tigers";
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">{homeTeam}</h2>
        <div className="home__score">{homeScore}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">{awayTeam}</h2>
        <div className="away__score">{awayScore}</div>
      </div>
    </div>
  );
};

export default TopRow;
