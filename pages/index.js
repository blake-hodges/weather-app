import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { MainCard } from '../components/MainCard'
import ContentBox from '../components/ContentBox'
import MetricsBox from '../components/MetricsBox'
import Header from '../components/Header'
import DateAndTime from '../components/DateAndTime'
import Search from '../components/Search'
import UnitSwitch from '../components/UnitSwitch'
import ErrorScreen from '../components/ErrorScreen'

const App = () => {
    const [cityInput, setCityInput] = useState('Tokyo')
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

    if (weatherData == null) {
        return (
            <h1>Loading...</h1>
        )
    } else if (weatherData.message == 'city not found') {
        return (
            <ErrorScreen>
                <Search
                    status={"error"}
                    onFocus={(e) => e.target.value = "" }
                    onKeyDown={(e) => e.key == "Enter" && setTriggerFetch(!triggerFetch)}
                    onChange={(e) => setCityInput(e.target.value)}
                />
            </ErrorScreen>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <MainCard weatherData={weatherData} unitSystem={unitSystem} />
                <ContentBox unitSystem={unitSystem}>
                    <Header>
                        <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
                        <Search
                            status={"search"}
                            placeholder={"Search a city..."}
                            value={cityInput}
                            onChange={(e) => setCityInput(e.target.value)}
                            onFocus={(e) => {
                                e.target.value = ""
                                e.target.placeholder = ""
                            }}
                            onKeyDown={(e) => e.key == "Enter" && setTriggerFetch(!triggerFetch)}
                        />
                    </Header>
                    <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
                    <UnitSwitch onChange={(e) => setUnitSystem(e.target.value)} />
                </ContentBox>
            </div>
        )
    }
}

export default App
