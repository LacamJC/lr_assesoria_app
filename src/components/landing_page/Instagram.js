import styles from "../../assets/scss/pages/Instagram.module.css"
import { FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa"
import phone from "../../assets/img/phone.png"
import AnimatedComponent from "../objects/AnimatedComponent"
const Instagram = () => {
    return (
        <>
            <div className={`${styles.background}`}>
                <AnimatedComponent>
                    <div className={`${styles.content} container`} id="contato">
                        <h2>Entre em contato conosco</h2>

                        <div className={`row`}>
                            <div className={`col col-md-6 col-12 bg-sudccess d-flex justify-content-center align-items-center`}>
                                <img src={phone} />
                            </div>
                            <div className={`col col-md-6 col-12 ${styles.side}`}>

                                <h3>Telefone</h3>
                                <hr />
                                <ul>
                                    <li>
                                        <a href="https://wa.me/5511966836385?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20%21%20Gostaria%20de%20conversar%20sobre%20um%20evento%20que%20quero%20fazer" target="_blank">
                                            <FaWhatsapp className={`${styles.icon}`} /> (11) 12345-5948
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/lr.assessoria.eventos/" target="_blank">
                                            <FaPhone className={`${styles.icon}`} /> (11) 12345-5948
                                        </a>
                                    </li>
                                </ul>
                                <h3>Nossas redes sociais</h3>
                                <p>Se interessou pelos nossos serviços e gostaria de ver mais pessoas que realizaram seus sonhos ? Acesse nosso instagram !</p>
                                <hr />
                                <ul>
                                    <li>
                                        <a href="#">
                                            <FaInstagram className={`${styles.icon}`} /> @lrassesoria
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatedComponent>
            </div>
        </>
    )

}

export default Instagram