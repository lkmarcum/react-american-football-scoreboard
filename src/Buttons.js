import React, { useState } from "react";
import "./App.css";

const Buttons = () => {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTeam = "Lions";
  const awayTeam = "Tigers";
  return (
    <section className="buttons">
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
    </section>
  );
};

export default Buttons;
