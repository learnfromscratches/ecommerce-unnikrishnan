import styles from "./button.module.css"

const Button = props => {
    return (
        <div className={styles.btnGroup}>
            <button type={props.type} className={`${styles.button} ${styles[props.btnCls]}`} onClick = {props.onClick} ref = {props.reference} onKeyDown={props.onKeyDown}>
                <div className={styles.btnText}>
                    {props.icon}{props.text}
                </div>
            </button>
        </div>
    )
}
export default Button;