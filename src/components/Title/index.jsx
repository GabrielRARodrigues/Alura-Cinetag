import styles from './Title.module.css'

export function Title({ children }) {
  return <div className={styles.title}>{children}</div>
}
