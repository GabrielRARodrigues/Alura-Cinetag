import { Link } from 'react-router-dom'

import styles from './HeaderLink.module.css'

export function HeaderLink({ to, children }) {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  )
}
