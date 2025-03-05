
import styles from '../../assets/scss/pages/Servicos.module.css'

import Carousel from 'react-bootstrap/Carousel';

import AnimatedComponent from "../objects/AnimatedComponent";

import { Link } from 'react-router-dom';

const Servicos = () => {






    const servicos = [
        {
            id: "1",
            titulo: "Assesoria Personalizada",
            items: [
                "Personalização das tarefas de assessoria de acordo com o estágio dos preparativos.",
                "Divisão das responsabilidades entre o assessor e os noivos, com o apoio contínuo da JR Acessoria.",
                "Flexibilidade para se adaptar às necessidades de cada casal, garantindo que todas as etapas do evento sejam cuidadosamente acompanhadas."

            ],
            paragrafo: "Ideal para casais que já fizeram algumas contratações e precisam de auxílio em alguma etapa do processo.",
            img_1: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img_2: "https://images.pexels.com/photos/7648051/pexels-photo-7648051.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img_3: "https://images.pexels.com/photos/28976231/pexels-photo-28976231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },


        {
            id: "2",
            titulo: "Cerimonial",
            items: ["Suporte completo desde a escolha dos fornecedores até a criação de um cronograma eficiente.", "Orientação para definir o estilo e os detalhes do evento.", "Lista de fornecedores recomendados e garantidos pela experiência da JR Acessoria."],
            paragrafo: "Ideal para quem já fez as contratações e precisa de auxílio no momento do cortejo.",
            img_1: "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img_2: "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img_3: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },

        {
            id: "3",
            titulo: "Assesoria do dia",
            items: [
                "Coordenação dos fornecedores e cronograma no dia do evento.",
                "Garantia de que tudo esteja no lugar certo, no horário certo, para que os organizadores e convidados possam aproveitar o evento ao máximo."
            ],
            paragrafo: "Ideal para quem já fez as contratações e precisa de auxílio na reta final, garantindo que o evento seja aproveitado de maneira tranquila e sem estresse.",
            img_1: "https://images.pexels.com/photos/7551751/pexels-photo-7551751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img_2: "https://images.pexels.com/photos/7648221/pexels-photo-7648221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img_3: "https://images.pexels.com/photos/7551764/pexels-photo-7551764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }
    ]

    const select = (e) => {
        const { src, className } = e.target
        var id = className.split(" ")[1]

        const foco = document.getElementById(id)


        var divs = document.getElementsByClassName(`${styles.select}`)
        // var mesmo_index = document.getElementsByClassName("1")

        for (let i = 0; i < divs.length; i++) {
            divs[i].classList.remove(`${styles.select}`)
            // console.log(mesmo_index)
        }

        e.target.classList.add(`${styles.select}`)

        foco.src = src

    }

    return (
        <>
            <article className={`${styles.background} ${styles.desktopVision}`} id="servicos">
                <AnimatedComponent>
                    <div className={`${styles.content}`}>
                        <h2 className={`${styles.subtitulo}`}>Serviços</h2>

                        <Carousel interval={100000000} >

                            {servicos.map((servico) => (
                                <Carousel.Item className={`${styles.carousel_item}`} key={servico.id}>
                                    <div className={`${styles.carousel_content}`}>
                                        <div className="row">
                                            <div className="col col-xl-6 col-12 d-flex flex-column">
                                                <h3>{servico.titulo}</h3>
                                                <p>{servico.paragrafo}</p>
                                                <ul>
                                                    {servico.items.map((item) => (
                                                        <li key={item} className={`${styles.servico_list_item}`}>{item}</li>
                                                    ))}
                                                </ul>

                                                <a href="#formulario" className={`${styles.button} btn`}></a>
                                            </div>
                                            <div className={`col col-xl-6 col-12 d-flex justify-content-center align-items-center`}>
                                                <div className={`${styles.grid}`}>
                                                    <div className={`${styles.grid_1}`}>
                                                        {/* <img src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={"100%"} height={"100%"}/> */}
                                                        <img className={`${styles.image_grid} ${servico.id}`} id={servico.id} src={servico.img_1} alt="Subimagem" />
                                                    </div>
                                                    <div className={`${styles.grid_2}`}>
                                                        <img className={`${styles.image_grid} ${servico.id} ${styles.select}`} src={servico.img_1} onClick={select} alt="Imagem relacionada ao servico em questao" />
                                                    </div>
                                                    <div className={`${styles.grid_3}`}>
                                                        <img className={`${styles.image_grid} ${servico.id}`} src={servico.img_2} onClick={select} alt="Imagem relacionada ao servico em questao" />
                                                    </div>
                                                    <div className={`${styles.grid_4}`}>
                                                        <img className={`${styles.image_grid} ${servico.id}`} src={servico.img_3} onClick={select} alt="Imagem relacionada ao servico em questao" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>


                            ))}
                        </Carousel>


                    </div>

                </AnimatedComponent>
            </article>
            <article className={`${styles.mobileVision}`}>
                <h2>Nossos serviços</h2>
                <ul>
                    {servicos.map((servico) => (
                        <Link key={servico.id} to={`/servico/${servico.id}`}>   
                            <li >{servico.titulo}</li>
                        </Link>
                    ))}
                </ul>
                
            </article>
        
        </>
    )
}

export default Servicos