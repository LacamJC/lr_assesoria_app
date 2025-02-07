import styles from '../../assets/scss/layout/Header.module.css'
import { Link } from 'react-router-dom'
const Header = () =>{
    return(
        <>
            <header className={`${styles.cabecalho}`}>
                <div className={`${styles.logo_container}`}>
                    <img 
                        src={"https://placehold.co/150x150"}
                        alt="Logo da LR Assesoria"
                        className={`${styles.logo_imagem}`}
                    />
                </div>

                {/* Menu para telas grandes */}
                <nav className={`${styles.large_nav}`}>
                    <ul className={`${styles.menu_list}`}>

                        <a href="#" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Home</li>
                        </a>

                        <a href="#eventos" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Eventos</li>
                        </a>

                        <a href="#servicos" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Serviços</li>
                        </a>

                        <a href="#" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Contato</li>
                        </a>

                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header