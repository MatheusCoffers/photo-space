import React from 'react'
import Card from './Card/index'

export default function Cards({fotos, styles}) {
  return (
    <div>
        <ul className={styles.galeria__cards}>
          {fotos.map((foto)=>{
            return(
              <Card foto={foto} styles={styles}/>
            )
          })}
        </ul>
    </div>
  )
}
