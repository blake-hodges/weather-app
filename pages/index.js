import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { MainCard } from "../components/MainCard"

const App = () => {
    const [cityInput, setCityInput] = useState('London')
    const [triggerFetch, setTriggerFetch] = useState(true)
    const [weatherData, setWeatherData] = useState(null)
    const [unitSystem, setUnitSystem] = useState('metric')

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('api/data', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ cityInput })
            })
            const data = await res.json()
            setWeatherData({ ...data })
            setCityInput('')
        }
        getData()
    }, [triggerFetch])

    console.log(weatherData)

    if (weatherData == null) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <p>Weather App wrapper</p>
                {/*}<MainCard
                    city={weatherData.name}
                    country={weatherData.sys.country}
                    description={weatherData.weather[0].description}
                    iconName={weatherData.weather[0].icon}
                    unitSystem="metric"
                    weatherData={weatherData}
                />*/}
                <MainCard data={weatherData} />
            </div>
        )
    }
}

export default App
