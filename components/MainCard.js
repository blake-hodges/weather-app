import Image from 'next/image'
//export const MainCard = ({ city, country, description, iconName, unitSystem, weatherData }) => {
export const MainCard = (props) => {
    return (
        <div>
            <h1>{props.data.name}, {props.data.sys.country}</h1>
            <p>{props.data.weather[0].description}</p>
            <Image
                width="100px"
                height="100px"
                src={`/icons/${props.data.weather[0].icon}.svg`}
            />
            <h1>{props.data.main.temperature}</h1>
            <p>Feels like {props.data.main.feels_like}</p>
        </div>
    )
}
