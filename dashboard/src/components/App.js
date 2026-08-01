import React from "react";
import './App.css'
const App = () => {
  const apps = [
    {
      name: "Kite",
      description: "Trade stocks, futures, options and ETFs.",
    },
    {
      name: "Console",
      description: "Portfolio reports and tax statements.",
    },
    {
      name: "Coin",
      description: "Invest in Direct Mutual Funds.",
    },
    {
      name: "Varsity",
      description: "Learn stock market trading for free.",
    },
  ];

  return (
    <div className="apps-container">
      <h2>Our Apps</h2>

      <div className="apps-grid">
        {apps.map((app, index) => (
          <div className="app-card" key={index}>
            <h3>{app.name}</h3>
            <p>{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;