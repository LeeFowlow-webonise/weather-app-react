import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import CurrentDate from '../elements/currentDate';

describe('current date component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<CurrentDate weatherData={weatherData.cityDate[1]}/>);
        const forecast = getByTestId('dateDiv');
        expect(forecast).toBeTruthy();
    })
})