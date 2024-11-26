export const fetchWeather = async (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
    const ApiKey = '2deabc3b1dbb32db8f1a6d4ed95a8f0b';
    const response = await fetch(URL + city + `&appid=${ApiKey}`);
    
    if(response.status == 404) {
        return null
        
    }
    else {
        const data = await response.json();
        return data
    }
}