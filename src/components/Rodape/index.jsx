import React from 'react'
import facebook from './icons/facebook.svg'
import instagram from './icons/instagram.svg'
import twitter from './icons/twitter.svg'
import style from './Rodape.module.scss'

export default function Rodape() {
  return (
    <>
        <main className={style.rodape}>
            <div className={style.icones}>
                <a href="https://www.linkedin.com/in/matheus-coffers-02b9771b3/">
                    <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/math_coffers/">
                    <img src={instagram} alt="" />
                </a>
                <a href="">
                    <img src={twitter} alt="" />
                </a>
            </div>

            <h1>
                Feito por Matheus Coffers
            </h1>
        </main>
    </>
  )
}
