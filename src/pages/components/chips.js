import styles from "./chips.module.css"

const Chips = props =>{
    return(
        <div>
            <p className={`${styles[props.chipsClass]}`} onClick={() => props.onClick(props.id)}>{props.text}</p>
        </div>
    )
}
export default Chips;