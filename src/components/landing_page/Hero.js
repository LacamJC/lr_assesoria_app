import styles from '../../assets/scss/pages/Hero.module.css'

import Sobre from './Sobre'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react';

const Hero = () => {
    
    const t_2 = useRef(null)
    const t_3 = useRef(null)
    const t_4 = useRef(null)
    const btn = useRef(null)

    useGSAP(() => {
        const tl = gsap.timeline()

        tl.from(t_2.current, {x: -100, opacity: 0, duration: .5 })
        .from(t_3.current, {y: 100, opacity: 0, duration: .5})
        .from(t_4.current, {y: 100, opacity: 0, duration: .5})
        .from(btn.current, {x: -100, opacity: 0, duration: .5})

        
    }, []  )

    return (
        <>

            <main className={`${styles.hero}`}>
                <div className={`${styles.control}`}>
                    <h1 className={`${styles.t_1}`}>
                        <span className={`${styles.t_2}`} ref={t_2}>TRANSFORME SEU EVENTO</span> <span className={`${styles.t_3}`} ref={t_3}>EM UM MOMENTO INESQUECÍVEL</span>
                        <span className={`${styles.t_4}`} ref={t_4}> COM A LR ASSESORIA</span>
                    </h1>

                    <Link to="/servicos" className={`${styles.button}`} ref={btn}></Link>
                </div>


            </main>


            <Sobre />

        </>
    )
}

export default Hero