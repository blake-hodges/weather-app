import styles from './ContentBox.module.css'
import Header from './Header'
import MetricsBox from './MetricsBox'

const ContentBox = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header data={props.data} />
            <MetricsBox />
        </div>
    )
}

export default ContentBox
