import Hero from "./Hero"
import Sobre from './Sobre'
import Eventos from "./Eventos"
import Servicos from "./Servicos"
import Galeria from "./Galeria"
import Contato from "./Contato"
import Footer from "../layout/Footer"
import Instagram from "./Instagram"
function Landing() {
    return (
        <>
            <Hero />
            <Sobre />
            <Eventos />
            <Servicos />
            <Galeria />
            <Contato />
            <Instagram />
            <Footer /> 
        </>
    )
}

export default Landing