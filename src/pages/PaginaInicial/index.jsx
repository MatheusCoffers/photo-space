import Cabecalho from "../../components/Cabecalho/index";
import Banner from "../../components/Banner/index";
import Menu from "../../components/Menu/index";
import Rodape from "../../components/Rodape/index";
import Galeria from "../../components/Galeria/index";
import Populares from "../../components/Populares/index";
import styles from "./PaginaInicial.module.scss";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={styles.principal}>
          <Menu />
          <Banner />
        </section>
        <div className={styles.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>

      <Rodape />
    </>
  );
}
