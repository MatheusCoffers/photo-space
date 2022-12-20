import React from 'react'
import styles from './Menu.module.scss'
import icones from './icones.json'
import Opcao from './Opcao'

export default function Menu() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__lista}>
        {icones.map((icone)=>{
          return(
            <Opcao icone={icone} styles={styles}/>
          )
        })}
      </ul>
    </nav>
  )
}
