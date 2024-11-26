import React from 'react'
import { weatherIcons } from './weatherIcons.js'

function WeatherDetails({weather}) {
    return (
        <div className='flex flex-col items-center text-white text-center'>
             <h1 className='text-2xl'>{weather.name}</h1>
            <img src={weatherIcons[weather.weather[0].main]} className='w-[50%]' />
            <div>
               
                <h2 className='text-5xl' >{`${Math.ceil(weather.main.temp)}°C`}</h2>
                <p className='text-md my-1'>{`Feels like ${Math.round(weather.main.feels_like)}°C`}</p>
                <p className='text-md'>{`${Math.ceil(weather.main.temp_max)}°C / ${Math.floor(weather.main.temp_min)}°C`}</p>
            </div>
            <div className='my-4 flex'>
                <div className='flex justify-center items-center text-left'>
                <img src={weatherIcons.Humidity} className='w-[25%]' />
                    <div className='ml-1'>
                        <p className='text-lg'>{`${weather.main.humidity}%`}</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className='flex justify-center items-center text-left ml-10'>
                <img src={weatherIcons.Wind} className='w-[25%]' />
                    <div className='ml-1'>
                        <p className='text-lg'>{`${weather.wind.speed} kph`}</p>
                        <p>Wind speed</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WeatherDetails