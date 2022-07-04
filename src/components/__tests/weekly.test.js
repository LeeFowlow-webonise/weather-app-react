import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Weekly from '../weekly';

describe('weekly forecast component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<Weekly location={weatherData.forecastData}/>);
        const forecast = getByTestId('weeklyDiv');
        expect(forecast).toBeTruthy();
    })
})