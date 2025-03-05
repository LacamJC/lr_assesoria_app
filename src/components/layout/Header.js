import styles from '../../assets/scss/layout/Header.module.css'

import { FaPlus } from "react-icons/fa"
import logo from '../../assets/img/LOGO_1.png'
const Header = () =>{
    const handleClick = () =>{
        document.getElementById('checkbox').checked = false;
    }
    return(
        <>
            <header className={`${styles.cabecalho}`}>
                <div className={`${styles.logo_container}`}>
                    <img 
                        src={logo}
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

                {/* Menu para telas menores */}
                <div className={`${styles.hiddenNav}`}>
                    <input type="checkbox" id='checkbox' className={`${styles.checkbox}`}/>
                    <FaPlus className={`${styles.menu_icon}`}/>
                    <ul className={`${styles.menu_list}`}>
                        <a href="#" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Home</li>
                        </a>
                        
                        <a href="#sobre" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Sobre</li>
                        </a>

                        <a href="#eventos" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Eventos</li>
                        </a>

                        <a href="#servicos" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Serviços</li>
                        </a>

                        <a href="#" className={`${styles.menu_list__link}`} onClick={handleClick}>
                            <li className={`${styles.menu_list__item}`}>Contato</li>
                        </a>

                        </ul>
                </div>
            </header>
        </>
    )
}

export default Header