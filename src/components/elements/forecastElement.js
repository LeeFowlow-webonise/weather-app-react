let header;

const ForecastElement = (forecastDiv) => {
    if(forecastDiv.forecastDiv[2] === 'hourly'){
        header = '24-hour Forecast'
    } else {
        header = 'Weekly Forecast'
    }

    return(
        <div className='forecast' id='forecast' data-testid='forecastElement'>
            <div className='top'>
                <div className='header'>{forecastDiv.forecastDiv[0]} - <span>{header}</span></div>
            </div>
            <div className='row'>
                {forecastDiv.forecastDiv[1]}
            </div>
        </div>
    )
}

export default ForecastElement