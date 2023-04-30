import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
        <img src="./imagens/drugs.png" className={styles.logo} />
        <div className={styles.links}>
            <a href='#'>Contato</a>
            <a href='#'>Comprar</a>
            <a href='#'>Sobre</a>
        </div>
    </header>
  )
}

export default Header