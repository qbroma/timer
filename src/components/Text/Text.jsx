import styles from './Text.module.css';

export const Text = ({ children }) => (
        <div className={styles.text}>
            {children}
        </div>
)
