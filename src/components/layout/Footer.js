import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from "../../assets/scss/layout/Footer.module.css"
const Footer = () => {
    return (
        <div className="container">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-6 mb-3">
                        <h5>Áreas</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Hero
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#sobre" className="nav-link p-0 text-body-secondary">
                                    Sobre nós
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#eventos" className="nav-link p-0 text-body-secondary">
                                    Eventos
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#servicos" className="nav-link p-0 text-body-secondary">
                                    Serviços
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#depoimentos" className="nav-link p-0 text-body-secondary">
                                    Depoimentos
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#formulario" className="nav-link p-0 text-body-secondary">
                                    Formúlario para evento
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-6 mb-3">
                        <h5>Contato</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="https://www.instagram.com/lr.assessoria.eventos/" className="nav-link p-0 text-body-secondary">
                                    <FaInstagram/> @lrassesoria
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#sobre" className="nav-link p-0 text-body-secondary">
                                    <FaWhatsapp/> +55 11 96683-6385
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#eventos" className="nav-link p-0 text-body-secondary">
                                    
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#servicos" className="nav-link p-0 text-body-secondary">
                                    
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#depoimentos" className="nav-link p-0 text-body-secondary">
                                    
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#formulario" className="nav-link p-0 text-body-secondary">
                                    
                                </a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2025 LacamJC. All rights reserved. - Aplicação projetada e desenvolvida por <a href="https://github.com/LacamJC" target="_blank">LacamJC</a></p>
                    <ul className="list-unstyled d-flex">
                        <li className={`ms-3 ${styles.footer_icon}`}>
                            <a className="link-body-emphasis" href="https://www.linkedin.com/in/jo%C3%A3o-ramajo-4a3157269/" target="_blank">
                                <FaLinkedin />
                            </a>

                        </li>
                        <li className={`ms-3 ${styles.footer_icon}`}>
                            <a className="link-body-emphasis" href="https://github.com/LacamJC" target="_blank">
                                <FaGithub />
                            </a>
                        </li>
                         
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer