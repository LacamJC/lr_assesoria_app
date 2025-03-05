import styles from '../../assets/scss/layout/Header.module.css'
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa"
import logo from '../../assets/img/LOGO_1.png'
const Header = () => {
    const handleClick = () => {
        document.getElementById('checkbox').checked = false;
    }

    const backtoHome = () => {

        window.location.href = "/"
    }
    return (
        <>
            <header className={`${styles.cabecalho}`}>
                <div className={`${styles.logo_container}`}>
                    <img
                        src={logo}
                        alt="Logo da LR Assesoria"

                        className={`${styles.logo_imagem}`}
                        onClick={backtoHome}
                    />
                </div>

                {/* Menu para telas grandes */}
                <nav className={`${styles.large_nav}`}>
                    <ul className={`${styles.menu_list}`}>

                    

                        <Link to="/" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Home</li>
                        </Link>

                        <Link to="/evento" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Eventos</li>
                        </Link>

                        <Link to="/servicos" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Serviços</li>
                        </Link>

                        <Link to="/contato" className={`${styles.menu_list__link}`}>
                            <li className={`${styles.menu_list__item}`}>Contato</li>
                        </Link>


                    </ul>
                </nav>

                {/* Menu para telas menores */}
                <div className={`${styles.hiddenNav}`}>
                    <input type="checkbox" id='checkbox' className={`${styles.checkbox}`} />
                    <FaPlus className={`${styles.menu_icon}`} />
                    <ul className={`${styles.menu_list}`}>

                        <Link to="/" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Home</li>
                        </Link>

                        <Link to="/evento" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Eventos</li>
                        </Link>

                        <Link to="/servicos" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Serviços</li>
                        </Link>

                        <Link to="/contato" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Contato</li>
                        </Link>

                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header