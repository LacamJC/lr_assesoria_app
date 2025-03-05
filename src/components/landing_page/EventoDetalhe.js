import { useParams } from "react-router-dom"

import styles from "../../assets/scss/pages/EventosDetalhe.module.css"
const EventoDetalhe = () => {

    const eventos = [
        {
            id: 1,
            // img: icone_casamento,
            title: "Casamento",
        },
        {
            id: 2,
            // img: icone_panela,
            title: "Chá de Panela",
        }, {
            id: 3,
            // img: icone_casamento,
            title: "Casamento",
        },
        {
            id: 4,
            // img: icone_panela,
            title: "Chá de Panela",
        }, {
            id: 5,
            // img: icone_casamento,
            title: "Casamento",
        },
        {
            id: 6,
            // img: icone_panela,
            title: "Chá de Panela",
        }
    ]

    const { id } = useParams()
    const evento = eventos.find((e) => e.id === parseInt(id))
    return(
        <>
          <>
          
          <h1>{evento.title}</h1>
          </>
            
          
        </>
    )
}

export default EventoDetalhe