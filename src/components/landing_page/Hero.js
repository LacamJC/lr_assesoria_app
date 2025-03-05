import styles from '../../assets/scss/pages/Hero.module.css'

import Sobre from './Sobre'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <>
    
            <main className={`${styles.hero}`}>
                <div className={`${styles.control}`}>
                    <h1 className={`${styles.t_1}`}>
                        <span className={`${styles.t_2}`}>TRANSFORME SEU EVENTO</span> <span className={`${styles.t_3}`}>EM UM MOMENTO INESQUECÍVEL</span>
                        <span className={`${styles.t_4}`}> COM A LR ASSESORIA</span>
                    </h1>

                    <Link to="/servicos" className={`${styles.button}`}></Link>
                </div>  
                

            </main>

            
            <Sobre/>
      
        </>
    )
}

export default Hero