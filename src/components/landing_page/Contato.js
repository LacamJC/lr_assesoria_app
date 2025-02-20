import styles from "../../assets/scss/pages/Contato.module.css"
import { useState } from "react"
const Contato = () => {
    const [show, setShow] = useState(false)
    const eventos = [
        {
            name : "Casamento",
            id :"casamento"
        },
        {
            name : "Chá Revelação",
            id :"cha_revelacao"
        },
        {
            name : "Festa de debutante",
            id :"festa_de_debutante"
        },
        {
            name : "Aniversários",
            id :"aniversios"
        },
            
    ]

    const locais = [
        {
            name : "Aberto",
            id : "aberto"
        },
        {
            name : "fechado",
            id : "fechado"
        },
        {
            name : "Ainda não decidi",
            id : "nao_decidi"
        },
    ]

    const servicos = [
        {
            name : "Assesoria Personalizada",
            id : "assesoria_personalizada"
        }, {
            name : "Assesoria do Dia",
            id : "assesoria_dia"
        }, {
            name : "Cerimonial",
            id : "assesoria_personalizada"
        },
    ]

    const cards = [
        {
            titulo: "Casamento",
            paragrafo: "O casamento é um dos momentos mais marcantes na vida de um casal. É a celebração do amor, da união e do início de uma nova jornada juntos. Cada detalhe conta, desde a escolha do local até a última música da festa, e tudo deve refletir a personalidade e os sonhos dos noivos.",
            img : "https://images.unsplash.com/photo-1649183424680-464747a8e43d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            titulo: "Chá Revelação",
            paragrafo: "O chá revelação é um momento mágico e emocionante, onde amigos e familiares se reúnem para descobrir juntos se o bebê a caminho será um menino ou uma menina. É mais do que uma simples comemoração – é uma lembrança que ficará guardada para sempre no coração dos papais e de todos os presentes!",
            img: "https://plus.unsplash.com/premium_photo-1710845790360-6d7dfa02e1bd?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]

    const addTransition = () =>{
        const element = document.getElementById("side_card")

        element.classList.add(`${styles.blur}`)
        setTimeout(()=>element.classList.remove(`${styles.blur}`), 250)
    }
    
    const radioSelect = (e) => {
        document.getElementById("outro").checked ? setShow(true) : setShow(false)
        const card = {
            titulo : document.getElementById("card_titulo"),
            paragrafo : document.getElementById("card_paragrafo"),
            img : document.getElementById("card_foto")
        }
        const radio_id = e.target.id 
        console.log(radio_id)

        addTransition()
     

        if(radio_id == "casamento"){
            card.titulo.innerText =  cards[0].titulo
            card.paragrafo.innerText = cards[0].paragrafo
            setTimeout(()=>card.img.src = cards[0].img,250)
            
        }
        if(radio_id == "cha_revelacao"){
            card.titulo.innerText =  cards[1].titulo
            card.paragrafo.innerText = cards[1].paragrafo
            
            setTimeout(()=>card.img.src = cards[1].img,250)
        }
      
    }
    return(
        <>
            <div className={`${styles.background}`} id="#contato">
                <div className={`${styles.content} row container mx-auto`}>
                    <div className={`col col-md-6 col-12 bg-pridmary ${styles.side_card}`} id="side_card">
                        <h3 className="" id="card_titulo">Casamento</h3>
                        <p id="card_paragrafo">
                        O casamento é um dos momentos mais marcantes na vida de um casal. É a celebração do amor, da união e do início de uma nova jornada juntos. Cada detalhe conta, desde a escolha do local até a última música da festa, e tudo deve refletir a personalidade e os sonhos dos noivos.
                        </p>
                        <img src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="card_foto" width="100%"/>
                    </div>
                    <div className={`col col-md-6 col-12 bg-succedss ${styles.side_form}`}>
                        <form className={`${styles.form}`}>
                            <div className="mb-3">
                                <label for="nome" class={`form-label ${styles.label_title}`}>Seu nome</label>
                                <input type="text" id="nome" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="tipo" class={`form-label ${styles.label_title}`}>Tipo de evento</label>
                                {eventos.map((evento)=>(
                                       <Radio evento={evento} funcao={radioSelect}/>
                                    ))}
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" id="outro" name="eventos" onChange={radioSelect}/>
                                        <label className="form-check-label" for="outro">
                                            Outro
                                        </label>
                                    </div>
                                    
                                    {show ? (<input type="text" id="input" placeholder="Fale sobre o evento aqui" className="form-control"/>): ""}
                            </div>

                            {/* <div className="mb-3">
                                <label htmlFor="orcamento" className="form-label">
                                    Orçamento
                                </label>
                                <input type="number" className="form-control"/>
                            </div> */}
                            <div className="mb-3">
                                <label htmlFor="pessoas" className={`form-label ${styles.label_title}`}>
                                    Quantidade de pessoas no evento (Quantidade aproximida)
                                </label>
                                <input type="number" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="local" className={`form-label ${styles.label_title}`}>
                                    Como será o local do evento
                                </label>
                                {locais.map((local)=>(<Radio evento={local} funcao={radioSelect}/>))}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="servico"  class={`form-label ${styles.label_title}`}>
                                    Qual tipo de serviço você deseja
                                </label>
                                {servicos.map((servico)=>(<Radio evento={servico} funcao={radioSelect}/>))}
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

const Radio = ({evento, funcao}) => {

    return(
        <> 
            <div className="form-check">
                <input class="form-check-input" type="radio" name="eventos" id={evento.id} onChange={funcao}/>
                <label className="form-check-label" for={evento.id}>
                    {evento.name}
                </label>
            </div>
        </>
    )
}

export default Contato