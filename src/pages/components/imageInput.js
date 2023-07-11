import styles from "./imageinput.module.css"

const ImageInput = props =>{
    return(
        <div className={styles.input}>
            <label className={styles.label}>{props.label}</label>
            <input ref={props.reference} type="file" name="file" className={`${styles.imageInput} ${styles[props.inputCls]}`} onChange = {props.onChange} onKeyDown={props.onKeyDown} placeholder={props.placeholder}/>
        </div>
    )
}
export default ImageInput;