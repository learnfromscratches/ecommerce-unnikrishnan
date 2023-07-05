import Button from "./button";
import styles from "./cart.module.css"


const CartComponent = props => {
    return (
        <div className={styles.cart}>
            <img className={styles.imageCol} src={props.mainImage} />
            <div className={styles.productDetails}>
                <h3>{props.title}</h3>
                <p className={styles.description}>{props.description}</p>
            </div>
            <div className={styles.options}>
                <Button btnCls="cart" text="Cancel" onClick={props.onClick}/>
            </div>
        </div>
    )
}
export default CartComponent;