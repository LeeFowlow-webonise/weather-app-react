import { render } from '@testing-library/react';
import location from '../../util/__forTests/mockWeatherData';
import Weekly from '../weekly';

describe('weekly forecast component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<Weekly location={location.weatherData}/>);
        const forecast = getByTestId('weeklyDiv');
        expect(forecast).toBeTruthy();
    })
})