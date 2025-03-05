import styles from "../../assets/scss/pages/Galeria.module.css"
import foto1 from "../../assets/backgrounds/christine-jou-6PPQDX2liKE-unsplash.webp"
import foto2 from "../../assets/backgrounds/info.md.webp"
import foto3 from "../../assets/backgrounds/sandy-millar-8vaQKYnawHw-unsplash.webp"

const Galeria = () => {

    const showDepoimentos = (e) => {

        console.log(e.target.checked)
        const text = document.getElementById("label_text")
        const _switch = document.getElementById("switch")
        const titles = document.getElementsByClassName(`${styles.title}`)
        if (e.target.checked) {

            console.log("Mostrando depoimentos")
            text.innerText = "Esconder Depoimentos"
            _switch.classList.add(`${styles.txt}`)
            Array.from(titles).forEach((title) => {
                console.log(title)
                title.classList.add(`${styles.force_show}`)

            })
        } else {

            text.innerText = "Mostrar Depoimentos"
            _switch.classList.remove(`${styles.txt}`)
            Array.from(titles).forEach((title) => {
                console.log(title)
                title.classList.remove(`${styles.force_show}`)

            })
        }



    }
    return (
        <>
      
            <div className={`${styles.galeria}`} id="depoimentos">
                <div className={`form-check form-switch ${styles.switch}`} id="switch">
                    <label className={`form-check-label ${styles.label}`} id="label_text" htmlFor="flexSwitchCheckDefault">Mostrar Depoimentos</label>
                    <input className={`${styles.hidden} form-check-input`} type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={showDepoimentos} />
                </div>
                <div className={`${styles.galeria__item} ${styles.h_1} ${styles.w_2}`}>
                    <img src={foto1} />
                    <span className={`${styles.title}`}>
                        <div className={`${styles.content}`}>
                            <h3>Jonas & Maria</h3>
                            <h4>Casamento</h4>
                            <p>
                                <span className={`${styles.aspas}`}>"</span>
                                Que top foi nosso casamento, só tenho a agradecer vocês amei toda atenção da equipe💖✨<span className={`${styles.aspas}`}>"</span>
                            </p>
                        </div>
                    </span>
                </div>

                 <div className={`${styles.galeria__item} ${styles.h_1} ${styles.w_2}`}>
                    <img src={foto3} />
                    <span className={`${styles.title}`}>
                        <div className={`${styles.content}`}>
                            <h3>Betania & Cosme</h3>
                            <h4>Noivos</h4>
                            <p>
                                <span className={`${styles.aspas}`}>"</span>
                                "Leticia, obrigada por tudo, tudo o que
                                você fez para realizar o meu sonho..
                                vocês são um amor de pessoa o
                                Jefferson e a Amanda são maravilhosos,
                                a recepção todos amaram, parabéns
                                pela Equipe 🎉✨<span className={`${styles.aspas}`}>"</span>
                            </p>
                        </div>
                    </span>
                </div>

                <div className={`${styles.galeria__item} ${styles.h_1} ${styles.w_4}`}>
                    <img src={foto2} />
                    <span className={`${styles.title}`}>
                        <div className={`${styles.content}`}>
                            <h3>Keyla</h3>
                            <h4>Debutante</h4>
                            <p>
                                <span className={`${styles.aspas}`}>"</span>
                                eu quero
                                Agradecer o trabalho da Leticia e
                                da sua equipe, que foi
                                maravilhoso, que Deus te
                                abençoe e lhe de muitos eventos✨<span className={`${styles.aspas}`}>"</span>
                            </p>
                        </div>
                    </span>
                </div>
                
            </div>
        
{/*
                <div className={`${styles.galeria__item} ${styles.h_1} ${styles.w_1}`}>
                    <img src="https://images.unsplash.com/photo-1606490208247-b65be3d94cd1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <span className={`${styles.title}`}>
                        <div className={`${styles.content}`}>
                            <h3>Anderson e Amanda</h3>
                            <h4>Casamento</h4>
                            <p>
                                <span className={`${styles.aspas}`}>"</span>
                                A LR Assessoria fez do nosso casamento um sonho real! Tudo foi impecável, do planejamento à execução. Uma noite inesquecível! 💖✨<span className={`${styles.aspas}`}>"</span>
                            </p>
                        </div>
                    </span>
                </div>

                <div className={`${styles.galeria__item} ${styles.h_1} ${styles.w_4}`}>



                    <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    <span className={`${styles.title}`}>
                        <div className={`${styles.content}`}>
                            <h3>Denise e Carlos</h3>
                            <h4>Chá revelação</h4>
                            <p>
                                <span className={`${styles.aspas}`}>"</span>
                                A LR Assessoria tornou nosso chá de revelação simplesmente incrível! Cada detalhe foi pensado com tanto carinho, e o dia foi ainda mais especial do que imaginávamos. Foi perfeito! 💕🎉<span className={`${styles.aspas}`}>"</span>
                            </p>
                        </div>
                    </span>
                </div> */}

        </>
    )
}

export default Galeria