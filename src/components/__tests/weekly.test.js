import { render, screen } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Weekly from '../weekly';

let forecastDiv = weatherData.weeklyData;
forecastDiv.push('weekly');

describe('weekly forecast component', () => {

    test('renders and displays appropriate output', () => {
        const {getByTestId} = render(<Weekly location={forecastDiv}/>);
        const forecast = getByTestId('weeklyDiv');
        expect(forecast).toBeTruthy();
        
        const display = getByTestId('forecastElement');
        expect(display).toBeTruthy();
        
        screen.getByText(forecastDiv[0].name + ' -');
        screen.getByText('Weekly Forecast');
    })
})