const API_KEY = "f356f0bebe641c38e6dd8e20c09087fc";
let city = "Kraków";

// const request = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));

const fetchMock = {
    coord: { lon: 19.9167, lat: 50.0833 },
    weather: [
        {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d'
        }
    ],
    base: 'stations',
    main: {
        temp: 280.34,
        feels_like: 278.23,
        temp_min: 277.37,
        temp_max: 280.83,
        pressure: 1017,
        humidity: 60
    },
    visibility: 10000,
    wind: { speed: 3.09, deg: 300 },
    clouds: { all: 75 },
    dt: 1677078491,
    sys: {
        type: 2,
        id: 2080223,
        country: 'PL',
        sunrise: 1677044340,
        sunset: 1677082147
    },
    timezone: 3600,
    id: 3094802,
    name: 'Krakow',
    cod: 200
}
