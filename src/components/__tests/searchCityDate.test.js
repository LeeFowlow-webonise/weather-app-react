import { render, screen } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import SearchCityDate from '../elements/searchCityDate';

let testDate = new Date(weatherData.cityDate[0] * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', hour: 'numeric', minute: '2-digit'});
let testDescription = weatherData.cityDate[1];

describe('searched city date display component', () => {

    test('renders and displays appropriate output', () => {
        const {getByTestId} = render(<SearchCityDate weatherData={weatherData.cityDate}/>);
        const forecast = getByTestId('cityDateDiv');
        expect(forecast).toBeTruthy();
        screen.getByText(`${testDate}`);
        screen.getByText(`${testDescription}`);
    })
})