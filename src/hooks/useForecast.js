let newDate = document.createElement('p');
let newTemp = document.createElement('p');
let newCond = document.createElement('p');
let newWind = document.createElement('p');
newDate.setAttribute('className', 'foreday');
newTemp.setAttribute('className', 'foreday');
newCond.setAttribute('className', 'foreday');
newWind.setAttribute('className', 'foreday');

const converter = (degrees) => {
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']

    let degreeCalc = Math.round((degrees / 360) * 8);

    return (directions[degreeCalc]);
}

const useForecast = (weatherData) => {
    let i;
    let forecastDiv = document.createElement('div');
    let newP = document.createElement('p');
    newP.setAttribute('className', 'foreday');

    for (i = 0; i < weatherData.length; i++){
        if (i % 4 === 0){
            let forecastData = weatherData[i];
            //console.log(forecastData.wind);
            let newD = document.createElement('div');            
            newD.setAttribute('className' + i, 'flex');            
            newDate.innerHTML = `{Date(${forecastData.dt * 1000}).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}`;
            newTemp.innerHTML = `{${forecastData.main.temp}} &deg;C`;
            newCond.innerHTML = `{${forecastData.weather[0].description}}`;
            newWind.innerHTML = `{${Math.round(10 * forecastData.wind.speed) / 10}km/hr <span>{${converter(forecastData.wind.deg)}}`;
            
            newD.append(newDate);
            newD.append(newTemp);
            newD.append(newCond);
            newD.append(newWind);
            forecastDiv.append(newD);

            //currently set to trigger before i passes the last divisible by 4 element number
            if (i >= weatherData.length - 4){
                //console.log(i);
                console.log(forecastDiv);
                //return forecastDiv;
            }
        }
    }
}

export default useForecast;