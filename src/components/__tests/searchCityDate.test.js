import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import SearchCityDate from '../elements/searchCityDate';

describe('searched city date display component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<SearchCityDate weatherData={weatherData.cityDate}/>);
        const forecast = getByTestId('cityDateDiv');
        expect(forecast).toBeTruthy();
    })
})