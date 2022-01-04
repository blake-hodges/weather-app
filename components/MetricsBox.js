import styles from './MetricsBox.module.css'
import MetricsCard from './MetricsCard'

const MetricsBox = () => {
    return (
        <div className={styles.wrapper}>
            <MetricsCard />
            <MetricsCard />
            <MetricsCard />
            <MetricsCard />
            <MetricsCard />
            <MetricsCard />
        </div>
    )
}


export default MetricsBox
