import styles from './Search.module.css'

const Search = (props) => {
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
}

export default Search
