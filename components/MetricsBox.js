import styles from './MetricsBox.module.css'
import MetricsCard from './MetricsCard'
import { getTime, getVisibility  } from '../services/helpers.js'
import { degToCompass } from '../services/converters.js'

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
                metric={props.weatherData.wind.speed}
                unit={"km/hr"}
                icon="/icons/wind.png"
            />
            <MetricsCard
                title="Direction"
                metric={degToCompass(props.weatherData.wind.speed)}
                unit={"unit"}
                icon="/icons/compass.png"
            />
            <MetricsCard
                title="Visibility"
                metric={getVisibility('metric', props.weatherData.visibility)}
                unit={"km"}
                icon="/icons/binocular.png"
            />
            <MetricsCard
                title="Sunrise"
                metric={getTime('metric', props.weatherData.sys.sunrise, props.weatherData.timezone)}
                unit={"am"}
                icon="/icons/sunrise.png"
            />
            <MetricsCard
                title="Sunset"
                metric={getTime('metric', props.weatherData.sys.sunset, props.weatherData.timezone)}
                unit={"pm"}
                icon="/icons/sunset.png"
            />
        </div>
    )
}


export default MetricsBox
