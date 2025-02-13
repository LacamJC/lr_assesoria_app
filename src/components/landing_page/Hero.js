import styles from '../../assets/scss/pages/Hero.module.css'

const Hero = () =>{
    return(
        <>
            <main className={`${styles.hero}`}>
                <div className={`${styles.control}`}>
                    <h1>
                        TRANSFORME SEU EVENTO EM UM MOMENTO INESQUECÍVEL
                    </h1>
                    <h2>COM A LR ASSESSORIA</h2>
                    <button className={`${styles.button_bege}`}>Descubra como podemos te ajudar</button>
                </div>
            </main>
        </>
    )
}

export default Hero