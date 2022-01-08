import styles from './Search.module.css'

const Search = (props) => {
    if (props.status == "search") {
        return (
            <input
                className={styles.search}
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onFocus={props.onFocus}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            />
        )
    } else if (props.status == "error") {
        return (
            <input
                className={styles.error}
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onFocus={props.onFocus}
                onChange={props.onChange}
                onKeyDown={props.onKeyDown}
            />
        )
    }
}

export default Search
