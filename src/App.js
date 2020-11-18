import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=c04bf0aa54ac4ce59e4100109201811&q=London"
      )
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  //Event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };
  const searchButton = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=c04bf0aa54ac4ce59e4100109201811&q=${input}`
      )
      .then((data) => {
        setWeather(data.data);
      });
  };
  return (
    <div>
      {weather && (
        <div>
          <div className="search">
            <input onChange={weatherInput} type="text" />
            <button onClick={searchButton}>Search</button>
          </div>
          <div className="weather-info">
            <h1>{weather.location.name}</h1>
            <h2>{weather.location.region}</h2>
            <div>
              <h3>{weather.current.condition.text}</h3>
              <img
                src={weather.current.condition.icon}
                alt={weather.location.name}
              />
              <h3>{weather.current.temp_c} Celsius</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
