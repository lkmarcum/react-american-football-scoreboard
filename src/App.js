//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const homeTeam = "Lions";
  const awayTeam = "Tigers";
  const [quarter, setQuarter] = useState(1);
  return (
    <div className="container">
      <section className="scoreboard">
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
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">3</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">7</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">21</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarter}</div>
          </div>
          <section className="quarters">
            <h4>Set Quarter</h4>
            <button onClick={() => setQuarter(1)} className="quarterButton">
              1
            </button>
            <button onClick={() => setQuarter(2)} className="quarterButton">
              2
            </button>
            <button onClick={() => setQuarter(3)} className="quarterButton">
              3
            </button>
            <button onClick={() => setQuarter(4)} className="quarterButton">
              4
            </button>
          </section>
        </div>
      </section>
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
    </div>
  );
}

export default App;
