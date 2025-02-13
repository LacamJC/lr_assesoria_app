import ServicoCard from "../objects/ServicoCard"
import styles from '../../assets/scss/pages/Servicos.module.css'

import Carousel from 'react-bootstrap/Carousel'; 



const Servicos = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
      };

    const servicos = [
        {
            titulo : "Assesoria Personalizada",
            items : ["Planejamento e organização – Auxiliamos desde a escolha do local até a definição do cronograma do evento, garantindo que tudo aconteça de forma impecável.","Assessoria personalizada – Oferecemos suporte antes e durante o casamento, ajudando na contratação de fornecedores, alinhamento de prazos e gerenciamento do orçamento.","Decoração e ambientação – Criamos um ambiente único e personalizado, com uma decoração que reflete o estilo e a personalidade do casal.","Cerimonial do dia – Coordenamos cada momento do evento para que os noivos e convidados aproveitem sem preocupações.","Indicação e gerenciamento de fornecedores – Conectamos você aos melhores fotógrafos, buffets, músicos e outros profissionais essenciais para o sucesso do seu casamento."],
            paragrafo : "Nossa assessoria de eventos oferece um serviço completo para que seu grande dia seja perfeito, cuidando de cada detalhe com dedicação e profissionalismo. Entre os serviços que prestamos para casamentos, estão:"
        },
        {
           titulo: "Chá Revelação",
  items: [
    "Planejamento e organização – Cuidamos de cada detalhe para que seu chá revelação seja emocionante e inesquecível.",
    "Assessoria personalizada – Oferecemos suporte antes e durante o evento, ajudando na definição do tema, escolha de fornecedores e gerenciamento do orçamento.",
    "Temas e decoração personalizados – Criamos um ambiente único e encantador, combinando cores, enfeites e detalhes que refletem a personalidade da família.",
    "Cerimonial da revelação – Organizamos o grande momento da revelação do bebê, garantindo que seja cheio de surpresas e emoção.",
    "Indicação e coordenação de fornecedores – Conectamos você aos melhores profissionais, como buffets, fotógrafos e produtores de lembrancinhas."
  ],
  paragrafo: "Nossa assessoria de eventos oferece um serviço completo para que seu chá revelação seja um momento especial e memorável. Cuidamos de cada detalhe com carinho e profissionalismo para garantir uma experiência única e cheia de emoção."

        }
    ]

    return(
        <>
            <article className={`${styles.background}`}>
                <div className={`${styles.content}`}>
                    <h2 className={`${styles.subtitulo}`}>Serviços</h2>
                 
              



                    <Carousel interval={3000}>
                        
                        {servicos.map((servico)=>(
                            <Carousel.Item className={`${styles.carousel_item}`}>
                                <div className={`${styles.carousel_content}`}>
                                <h1>{servico.titulo}</h1>

                                    <p>{servico.paragrafo}</p>
                                    {/* <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption> */}

                                    <ul>
                                        {servico.items.map((item)=>(
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Carousel.Item>
                            

                        ))}
                    </Carousel>

                    
                </div>
            </article>
        </>
    )
}

export default Servicos