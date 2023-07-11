import styles from "./input.module.css"

const Input = props =>{
    return(
        <div className={styles.input}>
            <label className={styles.label}>{props.label}</label>
            <input ref={props.reference} type={props.type} className={`${styles.textInput} ${styles[props.inputCls]}`} onChange = {props.onChange} onKeyDown={props.onKeyDown} placeholder={props.placeholder}/>
        </div>
    )
}
export default Input;