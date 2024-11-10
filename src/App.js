import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Train from "./components/Home";
import WeatherCity from "./components/CityWeather";
import WeatherLatLon from "./components/LatLonWeather";
import './App.css'; 
import WeatherMap from "./components/Map";
const App = () => {
  return (
    <Router>
      <div className="App">      
        <div className="header">
          <nav>
            <a href="#" className="logo">Weather App</a>
      
              <div className="nav-links">
                <ul>
                  <li><Link to="/Home">🏠 Main page</Link></li>
                  <li><Link to="/CityWeather">🌤️ Weather in your city</Link></li>
                  <li><Link to="/LatLonWeather">🗺️Find the weather by GPS</Link></li>
                  <li><Link to="/Map">🌍 Weather Map</Link></li>
                </ul>
              </div>
            
          </nav>
        </div>
        
        <Routes>
          <Route path="/Home" element={<Train/>} />
          <Route path="/CityWeather" element={<WeatherCity />} />
          <Route path="/LatLonWeather" element={<WeatherLatLon />} />
          <Route path="/Map" element={<WeatherMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;