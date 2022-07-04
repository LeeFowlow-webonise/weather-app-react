import { render, screen } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Hourly from '../forecast';

let forecastDiv = weatherData.forecastData;
forecastDiv.push('hourly');

describe('hourly forecast component', () => {

    test('renders and displays appropriate output', () => {
        const {getByTestId} = render(<Hourly weatherData={forecastDiv}/>);
        const forecast = getByTestId('forecastDiv');
        expect(forecast).toBeTruthy();
    
        const display = getByTestId('forecastElement');
        expect(display).toBeTruthy();
        
        screen.getByText(forecastDiv[0] + ' -');
        screen.getByText('24-hour Forecast');
        
    })
})