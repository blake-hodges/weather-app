import styles from './UnitSwitch.module.css'

const UnitSwitch = (props) => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.heading}>Switch Units</h3>
            <div className={styles.switch} onChange={props.onChange}>
                <input type="radio" id="metric" name="units" value="metric" defaultChecked />
                <label className={styles.labels} htmlFor="metric">Metric</label>
                <input onChange={props.onChange} type="radio" id="imperial" name="units" value="imperial" />
                <label className={styles.labels} htmlFor="imperial">Imperial</label>
            </div>
        </div>
    )
}

export default UnitSwitch;
