import logo from "./logo.png"
import search from "./search.png"
import styles from "./Cabecalho.module.scss"

export default function Cabecalho(){

    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que voce procura?"/>
                <img src={search} alt="Ícone de Busca" />
            </div>
        </header>
    )
}