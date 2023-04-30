import React from 'react'
import styles from './Produtos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
const produtos = ({url, descricao}) => {
    console.log(url)
  return (
    <div className={styles.produtos}>
      <div className={styles.avalicaoes}>
        {Array(5).fill(<FontAwesomeIcon icon={faStar} className={styles.estrelas}/>)}
        
      </div>
      <div className={styles["produtos-titulo"]}>
          <h2 className={styles["descricao-titulo"]}>{descricao}</h2> 
      </div>
      <div className={styles["container-imagem"]}>
        <img src={url} className={styles.imagem}/>
      </div>
      <div className={styles["produtos-texto"]}>
        <p className={styles["descricao-texto-paragrafo"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nulla itaque enim laborum consequuntur natus laboriosam rem, vel dolore</p>
      </div>
      
    </div>
  )
}

export default produtos