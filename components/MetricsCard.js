import Image from 'next/image'
import styles from './MetricsCard.module.css'


const MetricsCard = () => {
    return (
        <div className={styles.wrapper}>
            <p>kasfkdsk</p>
            <div className={styles.content}>
                <Image width="100px" height="100px" src={"/icons/01d.svg"} alt="weather icon" />
                <div>
                    <h1>100</h1>
                    <p>1</p>
                </div>
            </div>
        </div>
    )
}

export default MetricsCard
