import styles from "../../assets/scss/pages/Contato.module.css"
import { useState } from "react"
import AnimatedComponent from "../objects/AnimatedComponent"
const Contato = () => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({
        nome: "",
        tipo: "",
        qtd_pessoas: "",
        tipo_local: "",
        servico: "",
        observacoes: ""
    })
    const eventos = [
        {
            name: "Casamento",
            id: "casamento"
        },
        {
            name: "Chá Revelação",
            id: "cha_revelacao"
        },
        {
            name: "Festa de debutante",
            id: "festa_de_debutante"
        },
        {
            name: "Aniversários",
            id: "aniversarios"
        },

    ]

    const locais = [
        {
            name: "Aberto",
            id: "aberto"
        },
        {
            name: "fechado",
            id: "fechado"
        },
        {
            name: "Ainda não decidi",
            id: "nao_decidi"
        },
    ]

    const servicos = [
        {
            name: "Assesoria Personalizada",
            id: "assesoria_personalizada"
        }, {
            name: "Assesoria do Dia",
            id: "assesoria_dia"
        }, {
            name: "Cerimonial",
            id: "cerimonial"
        },
    ]

    const cards = [
        {
            titulo: "Casamento",
            paragrafo: "O casamento é um dos momentos mais marcantes na vida de um casal. É a celebração do amor, da união e do início de uma nova jornada juntos. Cada detalhe conta, desde a escolha do local até a última música da festa, e tudo deve refletir a personalidade e os sonhos dos noivos.",
            img: "https://images.unsplash.com/photo-1649183424680-464747a8e43d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            titulo: "Chá Revelação",
            paragrafo: "O chá revelação é um momento mágico e emocionante, onde amigos e familiares se reúnem para descobrir juntos se o bebê a caminho será um menino ou uma menina. É mais do que uma simples comemoração – é uma lembrança que ficará guardada para sempre no coração dos papais e de todos os presentes!",
            img: "https://plus.unsplash.com/premium_photo-1710845790360-6d7dfa02e1bd?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            titulo: "A Noite dos Sonhos",
            paragrafo: "A festa de debutante é um momento mágico, onde uma jovem se transforma em princesa e celebra a chegada de uma nova fase da vida. É uma noite de sonhos, onde cada detalhe é cuidadosamente planejado para criar memórias inesquecíveis. É a celebração de um sonho, um dia mágico que marca o início de uma nova jornada, repleta de felicidade e momentos inesquecíveis.",
            img: "https://images.pexels.com/photos/10953423/pexels-photo-10953423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            titulo: "Aniverário",
            paragrafo: "O aniversário é um momento especial, onde celebramos mais um ano de vida, rodeados de pessoas queridas. É uma oportunidade de expressar gratidão, compartilhar alegrias e criar memórias inesquecíveis. Seja uma festa grandiosa ou um encontro íntimo, o importante é celebrar a vida e os momentos que a tornam especial.",
            img: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            titulo: "Espaços abertos",
            paragrafo: "Um evento em espaço aberto é aquele que se realiza ao ar livre, aproveitando a natureza e o ambiente externo. Pense em um casamento em um jardim florido, uma festa de aniversário em um sítio com piscina ou um festival de música em um parque.",
            img: "https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            titulo: "Espaços fechados",
            paragrafo: "Eventos em espaços fechados oferecem um ambiente controlado e aconchegante, ideal para celebrações que exigem conforto e privacidade. Pense em um casamento elegante em um salão de festas, uma conferência corporativa em um centro de convenções ou um show intimista em um teatro.",
            img: "https://images.pexels.com/photos/27348832/pexels-photo-27348832/free-photo-of-festivo-animado-mesa-luxo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]

    const addTransition = () => {
        const element = document.getElementById("side_card")

        element.classList.add(`${styles.blur}`)
        setTimeout(() => element.classList.remove(`${styles.blur}`), 250)
    }

    const radioSelect = (e) => {
        document.getElementById("outro").checked ? setShow(true) : setShow(false)
        const card = {
            titulo: document.getElementById("card_titulo"),
            paragrafo: document.getElementById("card_paragrafo"),
            img: document.getElementById("card_foto")
        }
        const radio_id = e.target.id
        console.log(radio_id)

        addTransition()


        if (radio_id == "casamento") {

            setForm({
                ...form,
                tipo: radio_id
            })

            setTimeout(() => {
                card.img.src = cards[0].img
                card.titulo.innerText = cards[0].titulo
                card.paragrafo.innerText = cards[0].paragrafo
            }, 250)

        }
        if (radio_id == "cha_revelacao") {
            setForm({
                ...form,
                tipo: radio_id
            })
            setTimeout(() => {
                card.img.src = cards[1].img
                card.titulo.innerText = cards[1].titulo
                card.paragrafo.innerText = cards[1].paragrafo
            }, 250)
        }

        if (radio_id == "festa_de_debutante") {
            setForm({
                ...form,
                tipo: radio_id
            })
            setTimeout(() => {
                card.img.src = cards[2].img
                card.titulo.innerText = cards[2].titulo
                card.paragrafo.innerText = cards[2].paragrafo
            }, 250)
        }
        if (radio_id == "aniversarios") {
            setForm({
                ...form,
                tipo: radio_id
            })
            setTimeout(() => {
                card.img.src = cards[3].img
                card.titulo.innerText = cards[3].titulo
                card.paragrafo.innerText = cards[3].paragrafo
            }, 250)
        }

        if (radio_id == "outro") {
            setForm({
                ...form,
                tipo: radio_id
            })
        }

        if (radio_id == "aberto") {
            setTimeout(() => {
                card.img.src = cards[4].img
                card.titulo.innerText = cards[4].titulo
                card.paragrafo.innerText = cards[4].paragrafo
            }, 250)
        }

        if (radio_id == "fechado") {
            setTimeout(() => {
                card.img.src = cards[5].img
                card.titulo.innerText = cards[5].titulo
                card.paragrafo.innerText = cards[5].paragrafo
            }, 250)
        }

        if (radio_id == "assesoria_personalizada") {
            setForm({
                ...form,
                servico: radio_id
            })
        }

        if (radio_id == "assesoria_dia") {
            setForm({
                ...form,
                servico: "Assesoria do Dia"
            })
        }

        if (radio_id == "cerimonial") {
            setForm({
                ...form,
                servico: radio_id
            })
        }
        if (radio_id == "fechado") {
            setForm({
                ...form,
                tipo_local: radio_id
            })
        }
        if (radio_id == "aberto") {
            setForm({
                ...form,
                tipo_local: radio_id
            })
        }
        if (radio_id == "nao_decidi") {
            setForm({
                ...form,
                tipo_local: "Ainda não decidi"
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
  
        const telefone = "5511966836385"; // Número do WhatsApp

        const nome = form.nome ? encodeURIComponent(form.nome) : "Não informado";
        const evento = form.evento ? encodeURIComponent(form.evento) : "Não informado";
        const qtd_pessoas = form.qtd_pessoas ? encodeURIComponent(form.qtd_pessoas) : "Não informado";
        const local_evento = form.tipo_local ? encodeURIComponent(form.tipo_local) : "Não informado";
        const servico = form.servico ? encodeURIComponent(form.servico) : "Não informado";
        const observacoes = form.observacoes ? encodeURIComponent(form.observacoes) : "Não informado";

        // Construção da mensagem formatada com labels em negrito
        const mensagem = `*Meu nome:*%20${nome}%0A%0A*Evento:*%20${evento}%0A%0A*Quantidade de pessoas:*%20${qtd_pessoas}%0A%0A*Como será o local do evento:*%20${local_evento}%0A%0A*Serviço desejado:*%20${servico}%0A%0A*Observações/dúvidas:*%20${observacoes}`;

        // Construção do link do WhatsApp
        const linkWhatsApp = `https://wa.me/${telefone}?text=${mensagem}`;

        // Redirecionamento para o WhatsApp
        const link = document.createElement('a');
        link.href = linkWhatsApp;
        link.target = '_blank';
        link.style.display = 'none'; // Oculta o link
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link); // Remove o link após o clique

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(value)
        setForm({
            ...form,
            [name]: value
        })

    }
    return (
        <>
            <div className={`${styles.background}`} id="formulario">
            <AnimatedComponent animationType="show">
                <div className={`${styles.content} row container mx-auto`}>
                    
                        <div className={`col col-md-6 col-12 bg-pridmary ${styles.side_card}`} id="side_card">
                            <h3 className="" id="card_titulo">Casamento</h3>
                            <p id="card_paragrafo">
                                O casamento é um dos momentos mais marcantes na vida de um casal. É a celebração do amor, da união e do início de uma nova jornada juntos. Cada detalhe conta, desde a escolha do local até a última música da festa, e tudo deve refletir a personalidade e os sonhos dos noivos.
                            </p>
                            <img src="https://images.unsplash.com/photo-1649183424680-464747a8e43d?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="card_foto" width="100%" />
                        </div>
                    
                        <div className={`col col-md-6 col-12 bg-succedss ${styles.side_form}`}>
                            <form className={`${styles.form}`} onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="nome" className={`form-label ${styles.label_title}`}>1. Seu nome</label>
                                    <input type="text" id="nome" name="nome" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tipo" className={`form-label ${styles.label_title}`}>2. Tipo de evento</label>
                                    {eventos.map((evento, id) => (
                                        <Radio evento={evento} key={id} funcao={radioSelect} name="eventos" />
                                    ))}
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" id="outro" name="eventos" onChange={radioSelect} />
                                        <label className="form-check-label" htmlFor="outro">
                                            Outro
                                        </label>
                                    </div>

                                    {show ? (<input type="text" id="input" placeholder="Fale sobre o evento aqui" name="tipo" onChange={handleChange} className="form-control" />) : ""}
                                </div>

                                {/* <div className="mb-3">
                                <label htmlFor="orcamento" className="form-label">
                                    Orçamento
                                </label>
                                <input type="number" className="form-control"/>
                            </div> */}
                                <div className="mb-3">
                                    <label htmlFor="pessoas" className={`form-label ${styles.label_title}`}>
                                        3. Quantidade de pessoas no evento (Quantidade aproximida)
                                    </label>
                                    <input type="number" className="form-control" name="qtd_pessoas" onChange={handleChange}  />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="local" className={`form-label ${styles.label_title}`}>
                                        4. Como será o local do evento
                                    </label>
                                    {locais.map((local) => (<Radio evento={local} funcao={radioSelect} name="tipo_local" />))}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="servico" className={`form-label ${styles.label_title}`}>
                                        5. Qual tipo de serviço você deseja
                                    </label>
                                    {servicos.map((servico) => (<Radio evento={servico} funcao={radioSelect} name="servico" />))}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="textarea" className="form-label">Observações/Dúvidas</label>
                                    <br></br>
                                    <textarea className={`${styles.textarea}`} name="observacoes" id="observacao" onChange={handleChange}>
                                    </textarea>
                                </div>

                                <button type="submit" className={`${styles.button} btn`}>Enviar Mensagem</button>
                            </form>
                        </div>
                </div>
                
                </AnimatedComponent>
            </div>
        </>
    )
}

const Radio = ({ evento, funcao, name }) => {

    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={name} id={evento.id} onChange={funcao} />
                <label className="form-check-label" htmlFor={evento.id}>
                    {evento.name}
                </label>
            </div>
        </>
    )
}

export default Contato