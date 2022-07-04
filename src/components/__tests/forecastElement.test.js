import { render, screen } from '@testing-library/react';
import ForecastElement from '../elements/forecastElement';
import weatherData from '../../util/__forTests/mockWeatherData';

let hourlyDiv = [weatherData.forecastData[0], '<div>Hourly Test Text</div>', 'hourly'];
let weeklyDiv = [weatherData.forecastData[0], '<div>Weekly Test Text</div>', 'weekly'];

describe('check to see if forecastElement renders', () => {

    test('renders and displays appropriate output for hourly forecast', () => {
        const {getByTestId} = render(<ForecastElement forecastDiv={hourlyDiv}/>);
        const forecast = getByTestId('forecastElement');
        expect(forecast).toBeTruthy();
        screen.getByText(weatherData.forecastData[0] + ' -');
        screen.getByText('24-hour Forecast');
        screen.getByText('<div>Hourly Test Text</div>');
    })

    test('renders and displays appropriate output for weekly forecast', () => {
        const {getByTestId} = render(<ForecastElement forecastDiv={weeklyDiv}/>);
        const forecast = getByTestId('forecastElement');
        expect(forecast).toBeTruthy();
        screen.getByText(weatherData.forecastData[0] + ' -');
        screen.getByText('Weekly Forecast');
        screen.getByText('<div>Weekly Test Text</div>');
    })
})