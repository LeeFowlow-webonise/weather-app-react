import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Hourly from '../forecast';

describe('hourly forecast component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<Hourly weatherData={weatherData.forecastData}/>);
        const forecast = getByTestId('forecastDiv');
        expect(forecast).toBeTruthy();
    })

})