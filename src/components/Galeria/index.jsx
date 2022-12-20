import React from 'react'
import Tags from '../Tags/index'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards/index'

export default function Galeria() {
  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags />
        <Cards fotos={fotos} styles={styles}/>
    </section>
  )
}
