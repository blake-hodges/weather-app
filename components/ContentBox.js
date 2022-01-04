import styles from './ContentBox.module.css'
import Header from './Header'

const ContentBox = (props) => {
    return (
        <div className={styles.wrapper}>
            <Header data={props.data} />
        </div>
    )
}

export default ContentBox
