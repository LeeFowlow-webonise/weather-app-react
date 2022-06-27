let weatherData = [];

const weatherFetch = async(location) => {
    let lat = location[0];
    let long = location[1];

    await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          if (result.cod === '400'){
            return
          } else {
          weatherData.push(result.city.name);
          weatherData.push(result.list);
          }     
        })
    return weatherData;
}

export default weatherFetch