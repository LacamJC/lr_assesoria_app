
import styles from '../../assets/scss/pages/Sobre.module.css'
import { useEffect, useRef } from 'react'
const Sobre = () => {

    const elementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    elementRef.current.classList.add(`${styles.animar}`)

                } else {
                    elementRef.current.classList.remove('animted');
                }
            })
        })

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    return (
        <>
            <article className={`${styles.background} row w-100 mx-auto`} >
                <div className={`${styles.content} col-10 `} ref={elementRef} id='sobre'>
                    <div className="row w-100" >
                        <div className={`col col-md-6 col-12 ${styles.article}`}>
                            <h2>Sobre a LR Assesoria</h2>
                            <p className={`${styles.paragrafo}`}>
                                A LR Assessoria transforma sonhos em realidade, um evento de cada vez. Com paixão e dedicação, criamos celebrações únicas e personalizadas, que refletem a sua identidade e estilo. Nossa equipe experiente cuida de todos os detalhes, desde a concepção até a execução, para que você possa relaxar e aproveitar cada momento.
                            </p>
                            <p className={`${styles.paragrafo}`}>
                                Sempre levamos gratidão e satisfação para nossos clientes, mas não somos nós que falamos isso. Veja os <br /><a href="#depoimentos" className={`${styles.link}`}>depoimentos de pessoas que tiveram seus sonhos realizados</a>
                            </p>
                        </div>
                        <div className="col col-md-6 col-12  d-flex align-items-center justify-content-center">
                            {/* <img className={`${styles.foto_destaque}`} src="https://placehold.co/600x400"/> */}
                            <div className={`${styles.foto_destaque}`}>
                                <img src="https://plus.unsplash.com/premium_photo-1690569962416-73228c345116?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Sobre