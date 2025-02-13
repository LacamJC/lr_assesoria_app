import styles from '../../assets/scss/objects/Card.module.css'

const Card = ({img, title}) =>{
    return(
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.card__header}`}>
                    <img src={img} width="100%"/>
                </div>
                <div className={`${styles.card__body}`}>
                    <h3>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Card