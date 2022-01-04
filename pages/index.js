import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { MainCard } from '../components/MainCard'
import ContentBox from '../components/ContentBox'

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
                <MainCard data={weatherData} />
                <ContentBox data={weatherData} />
            </div>
        )
    }
}

export default App
