import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import background from './util/setBackground';
import Weather from './components/weather';
import Hourly from './components/forecast';
import Weekly from './components/weekly';
import City from './components/city';
let weatherData = [];

const changeBackground = (weatherData) => {
  let image = [];
  image = background(weatherData);

  //meant to change the text color depending on the background image. Not currently functioning.
  // fontAdjust(image[0]);

  document.body.style.backgroundImage = "url('" + image[1] + "')";//eslint-disable-line
}

const returnSearch = () => {
  document.getElementById('cityName').style.display = 'inline';
  document.getElementById('cityName').value = '';
  document.getElementById('cityNameSearch').style.display = 'inline';
}

const removeSearch = () => {
  document.getElementById('cityName').style.display = 'none';
  document.getElementById('cityNameSearch').style.display = 'none';
}

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  //loads the function along with the app
  useEffect(() => {
      const fetchData = async ()=> {
        //sets current lat and long
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
      });

      //searches weather information for current geolocation
      await Promise.all(
        await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            //ensures no bad requests get added to the weatherData array
            if (result.cod === '400'){
              return
            } else {
            weatherData.push(result);          
            }
            console.log(weatherData); 
            setData(weatherData);
            changeBackground(result);             
          })
        )
      }
      fetchData();
    }, [lat, long])

    return data ? (
        <Router>
          {(typeof data[0] !== 'undefined') ? (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link" onClick={returnSearch}> Current Weather </Link></li>
                <li><Link to={'/forecast/hourly'} className="nav-link" onClick={returnSearch}>24-hour Forecast</Link></li>
                <li><Link to={'/forecast/weekly'} className="nav-link" onClick={returnSearch}>Weekly Forecast</Link></li>
                <li><input id='cityName' className='nav-link' type='text' placeholder='Look up the weather in...'></input></li>
                <li><Link to={'/city'} id='cityNameSearch' className="nav-link" onClick={removeSearch}>Search</Link></li>
              </ul>
              </nav>
              <hr />
              <Routes>
                  <Route exact path='/' element={<Weather weatherData={data}/>}/>
                  <Route path='/forecast/hourly' element={<Hourly location={[lat, long]}/>}/>
                  <Route path='/forecast/weekly' element={<Weekly location={[data[0],[lat, long]]}/>} />
                  <Route path='/city' element={<City/>} />
              </Routes>
            </div>
            ): (
              <div>
             </div>
            )}
          </Router>      
    ): (
      <div></div>
    )
}

export default App;
