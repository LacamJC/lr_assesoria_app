import styles from "../../assets/scss/pages/Escolha.module.css"
import img1 from "../../assets/img/icones/prof.png"
import img2 from "../../assets/img/icones/quality.png"
import img3 from "../../assets/img/icones/rep.png"

import { Link } from "react-router-dom";
const Escolha = () => {
    return (
        <div className={`${styles.content}`}>
            <h2>Por que voce deveria nos escolher? </h2>

            <div className="d-flex justify-content-around flex-wrap">
                <Card
                    img={img1}
                    titulo="Experiência e Profissionalismo"
                    texto="Equipe experiente e qualificada, com profundo conhecimento do mercado de eventos. Atualizados com tendências e novidades, oferecemos soluções criativas e inovadoras para suas necessidades."
                    link="/"
                />
                <Card
                    img={img2}
                    titulo="Atendimento Personalizado"
                    texto="Cada cliente é único. Atendimento personalizado para entender suas necessidades e desejos. Criamos eventos exclusivos, sua visão em cada detalhe."
                    link="/"
                />
                <Card
                    img={img3}
                    titulo="Compromisso com a Excelência"
                    texto="Compromisso com a excelência em cada detalhe. Do local aos fornecedores, decoração e buffet, cuidamos de tudo. Relaxe e aproveite seu evento ao máximo."
                    link="/"
                />
            </div>
        </div>
    )
}

function Card({ img, titulo, texto, link }) {
    return (
        <div className={`${styles.card} mb-5`} style={{ width: '18rem' }}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                    {texto}
                </p>
                <Link to="/contato" className={`${styles.btn}`}>
                    Entrar em contato
                </Link>
            </div>
        </div>
    );
}

export default Escolha