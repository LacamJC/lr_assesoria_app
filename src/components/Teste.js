import styles from '../assets/scss/Teste.module.css'

const Teste = () =>{
    return(
        <>
            <h1 className={`${styles.titulo}`}>Titulo</h1>
            <h2 className={`${styles.subtitulo}`}>Subtitulo</h2>
            <p className={`${styles.paragrafo}`}>Paragrafo</p>

            <div className={`${styles.div}`}>
                <div className={`${styles.cubo} ${styles.c1}`}></div>
                <div className={`${styles.cubo} ${styles.c2}`}></div>
                <div className={`${styles.cubo} ${styles.c3}`}></div>
            </div>

        </>
    )
}

export default Teste