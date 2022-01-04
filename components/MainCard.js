import Image from 'next/image'
import styles from './MainCard.module.css'
export const MainCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.location}>{props.data.name}, {props.data.sys.country}</h1>
            <p className={styles.description}>{props.data.weather[0].description}</p>
            <Image
                width="300px"
                height="300px"
                src={`/icons/${props.data.weather[0].icon}.svg`}
                alt="weather icon"
            />
            <h1 className={styles.temperature}>{Math.round(props.data.main.temp)}&deg;</h1>
            <p>Feels like {Math.round(props.data.main.feels_like)}&deg;</p>
        </div>
    )
}
