import React, { useState } from "react";
import "./App.css";

const AwayButtons = () => {
  const [awayScore, setAwayScore] = useState(0);
  const awayTeam = "Tigers";
  return (
    <div className="awayButtons">
      <button
        onClick={() => setAwayScore(awayScore + 6)}
        className="awayButtons__touchdown"
      >
        {awayTeam} Touchdown
      </button>
      <button
        onClick={() => setAwayScore(awayScore + 3)}
        className="awayButtons__fieldGoal"
      >
        {awayTeam} Field Goal
      </button>
      <button
        onClick={() => setAwayScore(awayScore + 1)}
        className="homeButtons__touchdown"
      >
        {awayTeam} Extra Point
      </button>
      <button
        onClick={() => setAwayScore(awayScore + 2)}
        className="homeButtons__touchdown"
      >
        {awayTeam} Safety
      </button>
    </div>
  );
};

export default AwayButtons;
