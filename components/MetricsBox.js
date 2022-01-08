import styles from './MetricsBox.module.css'
import MetricsCard from './MetricsCard'
import { getTime, getVisibility, getAMPM, getWindSpeed } from '../services/helpers.js'
import { degToCompass, mpsToMph } from '../services/converters.js'

const MetricsBox = (props) => {
    return (
        <div className={styles.wrapper}>
            <MetricsCard
                title="Humidity"
                metric={props.weatherData.main.humidity}
                unit={"%"}
                icon="/icons/humidity.png"
                />
            <MetricsCard
                title="Wind Speed"
                metric={getWindSpeed(props.unitSystem, props.weatherData.wind.speed)}
                unit={ props.unitSystem == "metric" ? "m/s" : "mph" }
                icon="/icons/wind.png"
            />
            <MetricsCard
                title="Direction"
                metric={degToCompass(props.weatherData.wind.deg)}
                icon="/icons/compass.png"
            />
            <MetricsCard
                title="Visibility"
                metric={getVisibility(props.unitSystem, props.weatherData.visibility)}
                unit={props.unitSystem == "metric" ? "km" : "miles"}
                icon="/icons/binocular.png"
            />
            <MetricsCard
                title="Sunrise"
                metric={getTime(props.unitSystem, props.weatherData.sys.sunrise, props.weatherData.timezone)}
                unit={getAMPM(props.unitSystem, props.weatherData.sys.sunrise, props.weatherData.timezone)}
                icon="/icons/sunrise.png"
            />
            <MetricsCard
                title="Sunset"
                metric={getTime(props.unitSystem, props.weatherData.sys.sunset, props.weatherData.timezone)}
                unit={getAMPM(props.unitSystem, props.weatherData.sys.sunset, props.weatherData.timezone)}
                icon="/icons/sunset.png"
            />
        </div>
    )
}


export default MetricsBox
