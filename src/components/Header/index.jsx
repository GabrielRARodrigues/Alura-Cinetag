import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import logo from './assets/logo.png'
import { HeaderLink } from 'components/HeaderLink'

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo da Cinetag" />
      </Link>
      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/favoritos">Favoritos</HeaderLink>
      </nav>
    </header>
  )
}
