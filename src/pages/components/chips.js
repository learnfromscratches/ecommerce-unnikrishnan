import styles from "./chips.module.css"

const Chips = props =>{
    return(
        <div>
            <p className={`${styles[props.chipsClass]}`} onClick={() => props.onClick(props.text)}>{props.text}</p>
        </div>
    )
}
export default Chips;