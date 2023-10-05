import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()


  useEffect(() => {
    const success = pos => {
    const obj = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(obj)
  }

  navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
   if(coords) {
    const apiKey = '65a1e562cd9bb3c22768a5e514a6977b'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
    axios.get(url)
    .then(res => {
      setWeather(res.data)
      const obj = {
        celsius: (res.data.main.temp -273.15).toFixed(1),
        farenheit: ((res.data.main.temp -273.15) * 9/5 + 32).toFixed(1)
      }
      setTemp(obj)
    })

    .catch(err => console.log(err))
   }
  }, [coords])

  return (   
    <div>
      <WeatherCard 
        weather={weather}
        temp={temp}
      />
    </div>
  )
}

export default App
