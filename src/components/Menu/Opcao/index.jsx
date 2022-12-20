import React from 'react'

export default function Opcao({icone, styles}) {
  return (
    <li key={icone.id} className={styles.menu__item}>
              <img src={icone.imagem} alt={icone.titulo} />
              <a href="/">{icone.titulo}</a>
            </li>
  )
}
