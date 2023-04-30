import React from 'react'
import styles from './Main.module.css'
import Produtos from './produtos'
const Main = () => {
    const produtos = [
        {src:"./imagens/lsd.jpg", descricao_titulo:'Lsd'},
        {src:'./imagens/cocaina.jpg', descricao_titulo: "Cocaina"},
        {src:'./imagens/ganja.jpeg', descricao_titulo: "Ganja"},
        {src:'./imagens/meta.jpg', descricao_titulo: "metanfetamína"},
        {src:'./imagens/ganja.jpeg', descricao_titulo: "Ganja"},
        {src:'./imagens/meta.jpg', descricao_titulo: "metanfetamína"},
        {src:'./imagens/ganja.jpeg', descricao_titulo: "Ganja"},
        {src:'./imagens/meta.jpg', descricao_titulo: "metanfetamína"},
        {src:'./imagens/ganja.jpeg', descricao_titulo: "Ganja"},
        {src:'./imagens/meta.jpg', descricao_titulo: "metanfetamína"},
    ]
  return (
    <div className={styles.container}>
      <h1 className={styles.produtos}>Produtos</h1>
      <div className={styles.principal}>
        {produtos.map((products) => (
          <Produtos url={products.src} descricao={products.descricao_titulo} />
        ))}
      </div>
    </div>
  )
}

export default Main;