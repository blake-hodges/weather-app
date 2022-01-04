import DateAndTime from './DateAndTime'
import Search from './Search'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <div className={styles.wrapper}>
            <DateAndTime data={props.data} />
            <Search />
        </div>
    )
}

export default Header
