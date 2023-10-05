import { useState } from "react"

const WeatherCard = ({weather, temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    
  return (
    <article className="Weather">
      <div className="Weather__name">
        <h1 className="Weather__app">Weather App</h1>
        <h2 className="Weather__place">{weather?.name}, {weather?.sys.country}</h2>
      </div>
        <div className="Weather__time">
          <div className="Weather__image">
          <img className="Weather__image__climage"
            src={weather && `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt=""/>
          </div>        
          <div className="Weather__description">
            <h3 className="Weather__description__name">"{weather?.weather[0].description}"</h3>
            <ul className="Weather__description__list">
                <li><span>Wind Speed </span><span>{weather?.wind.speed} m/s</span></li>
                <li><span>Clouds </span><span>{weather?.clouds.all} %</span></li>
                <li><span>Pressure </span><span>{weather?.main.pressure} hPa</span></li>
            </ul>
          </div>
        </div >
        <div className="Weather__temperature">
            <h2 className="Weather__temperature__grados">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
            <button className="Weather__button" onClick={handleChangeTemp}>{isCelsius ? 'Change to °F' : 'Change to °C'}</button>
        </div>
    </article>
  )
}

export default WeatherCard