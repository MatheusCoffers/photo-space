import Cabecalho from "../../components/Cabecalho/index"
import Banner from "../../components/Banner/index"
import Menu from "../../components/Menu/index"
import Rodape from "../../components/Rodape/index"
import Galeria from "../../components/Galeria/index"
import styles from "./PaginaInicial.module.scss"

export default function PaginaInicial() {

    return(
        <>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <Banner/>
                </section>
            </main>
            <Galeria />
            <div className={styles.rodape}>
                <Rodape/>
            </div>

        </>
    )
}