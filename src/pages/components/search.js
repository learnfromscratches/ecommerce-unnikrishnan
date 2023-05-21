import styles from "./search.module.css";

const SearchBar = props=>{
    
    return(
        <div>
            <input className={styles.inputBar} value ={props.value} type ={props.type} placeholder={props.placeholder}/>
        </div>
    )
}
export default SearchBar;