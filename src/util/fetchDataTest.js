let weatherRes;

const fetchData = (weatherData) => {

    console.log(weatherData);  
    let lat = weatherData.lat; 
    let long = weatherData.long; 

    fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
          .then(res => res.json())
          .then(result => {
            weatherRes = [];
            //ensures no bad requests get added to the weatherData array
            if (result.cod === '400'){
              return
            } else {
            weatherRes.push(result);
            //lines 19-23 are temporary additions to make the array the same as original. Will be phased out.
            weatherRes.push('');
            weatherRes.push('');
            }
          })
    return (weatherRes);
}

export default fetchData