import { useState } from 'react';

const useLocation = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
    });
    return([lat, long]);
}

export default useLocation;