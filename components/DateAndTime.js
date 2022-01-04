import { getTime, getWeekday, getAMPM } from '../services/helpers.js'

const DateAndTime = (props) => {
    return (
        <div>
            <h2>{`${getWeekday(props.data)}, ${getTime("metric",props.data.dt, props.data.timezone)} ${getAMPM('imperial', props.data.dt, props.data.timezone)}`}</h2>
        </div>
    )
}

export default DateAndTime;
