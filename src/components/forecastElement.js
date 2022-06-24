const ForecastElement = (forecastDiv) => {
    return(
        <div className='forecast' id='forecast'>
            <div className='top'>
                <div className='header'>{forecastDiv.forecastDiv[0]} - <span>24-Hour Forecast</span></div>
            </div>
            <div className='row'>
                {forecastDiv.forecastDiv[1]}
            </div>
        </div>
    )
}

export default ForecastElement