import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import City from '../city';

const cityInfo = [
    weatherData.cityDate[0],
    weatherData.cityDate[1],
    weatherData.temp[0],
    weatherData.temp[1],
    weatherData.sunlight[0],
    weatherData.sunlight[1],
    'Test City'
]

describe('city forecast component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<City testValue={cityInfo}/>);
        const forecast = getByTestId('cityDiv');
        expect(forecast).toBeTruthy();
    })
})