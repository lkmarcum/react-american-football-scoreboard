import React, { useState } from "react";
import "./App.css";

const HomeButtons = () => {
  const [homeScore, setHomeScore] = useState(0);
  const homeTeam = "Lions";
  return (
    <div className="homeButtons">
      <button
        onClick={() => setHomeScore(homeScore + 6)}
        className="homeButtons__touchdown"
      >
        {homeTeam} Touchdown
      </button>
      <button
        onClick={() => setHomeScore(homeScore + 3)}
        className="homeButtons__fieldGoal"
      >
        {homeTeam} Field Goal
      </button>
      <button
        onClick={() => setHomeScore(homeScore + 1)}
        className="homeButtons__touchdown"
      >
        {homeTeam} Extra Point
      </button>
      <button
        onClick={() => setHomeScore(homeScore + 2)}
        className="homeButtons__touchdown"
      >
        {homeTeam} Safety
      </button>
    </div>
  );
};

export default HomeButtons;
