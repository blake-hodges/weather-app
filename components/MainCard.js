import Image from 'next/image'
import styles from './MainCard.module.css'
import { cToF } from '../services/converters.js'
export const MainCard = (props) => {
    let temperature = props.weatherData.main.temp;
    let feelsLike = props.weatherData.main.feels_like;
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.location}>{props.weatherData.name}, {props.weatherData.sys.country}</h1>
            <p className={styles.description}>{props.weatherData.weather[0].description}</p>
            <Image
                width="300px"
                height="300px"
                src={`/icons/${props.weatherData.weather[0].icon}.svg`}
                alt="weather icon"
            />
            {(props.unitSystem == "metric")
                ? <h1 className={styles.temperature}>{Math.round(temperature)}&deg;C</h1>
                : <h1 className={styles.temperature}>{Math.round(cToF(temperature))}&deg;F</h1>
            }
            {(props.unitSystem == "metric")
                ? <p>Feels like {Math.round(feelsLike)}&deg;C</p>
                : <p>Feels like {Math.round(cToF(feelsLike))}&deg;F</p>
            }

        </div>
    )
}
