import styles from '../../assets/scss/objects/CardServico.module.css'
const ServicoCard = ({titulo, items}) =>{
    return(
        <>
            <div className={`${styles.card}`}>
                <h3>{titulo}</h3>
                <ul>
                    {items.map(((item)=>(<li>item</li>)))}
                </ul>
                <button className={`${styles.button_bege}`}>Saiba mais</button>
            </div>
        </>
    )
}

export default ServicoCard