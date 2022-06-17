import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import background from './hooks/useBackground';
import Weather from './components/weather';
import Hourly from './components/forecast';
import Test from './components/test';
let weatherData = [];

const changeBackground = async (weatherData) => {
  let image = await background(weatherData);
  console.log('url(' + image + ')');
  // document.body.style.backgroundImage = 'url(' + image + ');';
  document.body.style.backgroundImage = "url('assets/images/backgrounds/clear sky.jpg')";//eslint-disable-line
}

const displayWidget = () => {
//   if (window.myWidgetParam !== 'undefined'){
//     window.myWidgetParam = [];  
//     window.myWidgetParam.push({id: 11,cityid: '553429',appid: process.env.REACT_APP_API_KEY,units: 'metric',containerid: 'useWidget-11',  });  
    
//     (function() {
//         var script = document.createElement('script');
//         script.async = true;
//         script.charset = "utf-8";
//         script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
//         var s = document.getElementsByTagName('script')[0];
//         s.parentNode.insertBefore(script, s);
//         console.log(s.parentNode);
//     })();
// }
  let widgetDiv = document.getElementById('useWidget-11');
  
  if (widgetDiv.style.display === 'none'){
    widgetDiv.style.display = 'inline'
  }
}

const hideWidget = () => {
  let widgetDiv = document.getElementById('useWidget-11');
  
  if (widgetDiv.style.display === 'inline'){
    widgetDiv.style.display = 'none'
  }
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
      await Promise.all([
        await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            weatherData = [];
            //ensures no bad requests get added to the weatherData array
            if (result.cod === '400'){
              return
            } else {
            weatherData.push(result);
            }
          }),
        await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            if (result.cod === '400'){
              return
            } else {
            weatherData.push(result);
            }
          setData(weatherData);
          changeBackground(weatherData);          
          })
        ])
      }
      fetchData();
    }, [lat, long])

    return data ? (
        <Router>
          {(typeof data[1] !== 'undefined') ? (
            <div>
              <h2>Testing out Routers!</h2>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link" onClick={hideWidget}> Current Weather </Link></li>
                <li><Link to={'/forecast/hourly'} className="nav-link" onClick={hideWidget}>Hourly Forecast</Link></li>
                <li><Link to={'/test'} className="nav-link" onClick={displayWidget}>Test</Link></li>
              </ul>
              </nav>
              <hr />
              <Routes>
                  <Route exact path='/' element={<Weather weatherData={data}/>}/>
                  <Route path='/forecast/hourly' element={<Hourly weatherData={data}/>}/>
                  <Route path='/test' element={<Test weatherData={data}/>} />
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
