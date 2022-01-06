import { getTime, getWeekday, getAMPM } from '../services/helpers.js'

const DateAndTime = (props) => {
    return (
        <div>
            <h2>{`${getWeekday(props.weatherData)}, ${getTime("metric",props.weatherData.dt, props.weatherData.timezone)} ${getAMPM('imperial', props.weatherData.dt, props.weatherData.timezone)}`}</h2>
        </div>
    )
}

export default DateAndTime;
