import React, { useState } from 'react';
import { fetchWeather } from './services.js';
import WeatherDetails from './WeatherDetails.jsx';

function Weather() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        setLoading(true); 
        setWeather(null); 
        try {
            const data = await fetchWeather(city);
            if (data === null) {
                setError('Please enter a valid city name.');
                setLoading(false); 
                return;
            }
            if (data.error) {
                setError(data.error);
            } else {
                setWeather(data);
                setCity('');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.'); 
            console.log(err);
        }
        setLoading(false); 
    };

    return (
        <div className="max-w-sm w-full bg-slate-400 rounded-xl p-4 bg-gradient-to-tl from-[#0000FF] to-[#800080] flex flex-col items-center">
            <h1 className="text-3xl font-bold text-white mb-4">Weather App</h1>
            <form
                onSubmit={handleSubmit}
                className="flex justify-center w-full mb-4"
            >
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-2 rounded-lg w-[80%] focus:outline-1 outline-cyan-500"
                />
                <button
                    type="submit"
                    className="bg-white text-2xl rounded-full w-[2.5rem] h-[2.5rem] ml-2 pl-1"
                >
                    🔍
                </button>
            </form>
            {loading && <p className="text-white text-sm mb-4">Loading...</p>} 
            {error && (
                <p className="text-red-500 text-sm mb-4">
                    {error}
                    <br />
                    <span className="text-2xl text-white font-bold">
                        City not found
                    </span>
                </p>
            )}
            {weather && <WeatherDetails weather={weather} />}
        </div>
    );
}

export default Weather;
