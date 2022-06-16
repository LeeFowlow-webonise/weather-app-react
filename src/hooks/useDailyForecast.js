
//NOT IMPLEMENTED - Star of a detailed three day forecast


import moment from 'moment';

//this will be the basis for displaying forecasts for specific days three days ahead
const useDailyForecast = (weatherData) => {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday', 'Monday', 'Tuesday', 'Wednesday']
    let resultArray = [];
    let weekDay = moment().format('dddd');
    
    //passes the days to be displayed into the returned array
    resultsArray.push(days.slice(days.indexOf('weekDay') + 1, days.indexOf('weekDay') + 4));
    
    /*final value in returned array will be the calculated weather for those three days,
    taken from the first reading after noon on each of them*/

    //let time = Date(weatherData.dt * 1000).toLocaleString('en-IN', {hour: 'numeric', minute: '2-digit'});
}