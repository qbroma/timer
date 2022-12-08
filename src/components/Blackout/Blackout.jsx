import styles from './Blackout.module.css'

export const Blackout = ({ children }) => (
        <div className={styles.blackout}>
            {children}
        </div>
)
