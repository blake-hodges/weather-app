import Image from 'next/image'
import styles from './MetricsCard.module.css'


const MetricsCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <p>{props.title}</p>
            <div className={styles.content}>
                <Image width="100px" height="100px" src={props.icon} alt="weather icon" />
                <div>
                    <h1>{props.metric}</h1>
                    <p>{props.unit}</p>
                </div>
            </div>
        </div>
    )
}

export default MetricsCard
