import { render, screen } from '@testing-library/react';
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
console.log(cityInfo[6] + ' -');

describe('city forecast component', () => {

    test('renders renders and displays appropriate output', () => {
        const {getByTestId} = render(<City testValue={cityInfo}/>);
        const forecast = getByTestId('cityDiv');
        expect(forecast).toBeTruthy();

        screen.getByText(cityInfo[0]);
        screen.getByText(cityInfo[2]);
        screen.getByText(cityInfo[4]);
        screen.getByText(cityInfo[6]);
    })
})