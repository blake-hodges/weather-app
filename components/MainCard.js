import Image from 'next/image'
import styles from './MainCard.module.css'
export const MainCard = (props) => {
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
            <h1 className={styles.temperature}>{Math.round(props.weatherData.main.temp)}&deg;</h1>
            <p>Feels like {Math.round(props.weatherData.main.feels_like)}&deg;</p>
        </div>
    )
}
