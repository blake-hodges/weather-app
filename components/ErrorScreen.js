import styles from './ErrorScreen.module.css'

const ErrorScreen = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.message}>City not found. Please try again.</h1>
            {children}
        </div>
    )
}

export default ErrorScreen
