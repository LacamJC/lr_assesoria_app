import styles from '../../assets/scss/pages/Eventos.module.css'
import Card from '../objects/Card';
import { useEffect } from 'react';
import icone_casamento from '../../assets/img/icones/casamento_black.png'
import icone_panela from '../../assets/img/icones/panela_black.png'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel"
import { Link } from 'react-router-dom';
import Galeria from './Galeria';

const Eventos = () => {
    useEffect(()=>{
        window.scrollTo({top: 0})
    },[])
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
            items: 1,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };

    const eventos = [
        {
            id: 1,
            img: icone_casamento,
            title: "Casamento",
        },
        {
            id: 2,
            img: icone_panela,
            title: "Chá de Panela",
        }, {
            id: 3,
            img: icone_casamento,
            title: "Casamento",
        },
        {
            id: 4,
            img: icone_panela,
            title: "Chá de Panela",
        }, {
            id: 5,
            img: icone_casamento,
            title: "Casamento",
        },
        {
            id: 6,
            img: icone_panela,
            title: "Chá de Panela",
        }
    ]


    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [])

    return (
        <>

            <article className={`${styles.content} ${styles.desktopVision}`} id='eventos'>

                <h2 className={`${styles.subtitulo}`}>Eventos</h2>
                <p className={`${styles.paragrafo}`}>Vamos além de um simples serviço de assesoria, cuidados de tudo que você precisa para ter o evento dos seus sonhos</p>

                {/* {eventos.map((evento)=>(
                    <Card 
                        title={evento.title}
                        img={evento.img}
                    />
                ))} */}

                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {eventos.map((evento) => (
                        <Link to={`/agendar`}>
                            <Card
                                key={evento.id}
                                title={evento.title}
                                img={evento.img}
                            />
                        </Link>
                    ))}
                </Carousel>

                <h2 className={`${styles.subtitulo} mt-5 pt-5`}>Depoimentos</h2>
            </article>

            <Galeria />


        </>
    )
}

export default Eventos;