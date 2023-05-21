import styles from "./input.module.css"

const Input = props =>{
    return(
        <div className={styles.input}>
            <label className={styles.label}>{props.label}</label>
            <input type={props.type} className={styles.textInput} placeholder={props.placeholder}/>
        </div>
    )
}
export default Input;