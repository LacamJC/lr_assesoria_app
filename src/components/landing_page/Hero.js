import styles from '../../assets/scss/pages/Hero.module.css'

const Hero = () => {
    return (
        <>
            <main className={`${styles.hero}`}>
                <div className={`${styles.control}`}>
                    <h1 className={`${styles.t_1}`}>
                        <span className={`${styles.t_2}`}>TRANSFORME SEU EVENTO</span> <span className={`${styles.t_3}`}>EM UM MOMENTO INESQUECÍVEL</span>
                        <span className={`${styles.t_4}`}> COM A LR ASSESORIA</span>
                    </h1>

                    <a href="#servicos" className={`${styles.button}`}></a>
                </div>
            </main>
        </>
    )
}

export default Hero