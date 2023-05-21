import Image from "next/image";
import styles from "./product.module.css"
import { useRouter } from "next/router";

const Product = props => {

    const router = useRouter();

    return (
        <div className={styles.product} onClick={() => router.push(`/products/${props.id}`)}>
            <Image width={280} height={280} src={props.thumbnailImage} quality={100} sizes="320 640 750" className={styles.productImage} />
            <div className={styles.desc}>
                <h3 className={styles.title}>{props.title}</h3>
                <div className={styles.priceDetails}>
                    <span>₹{props.price}</span>
                    <span>₹{props.actualPrice}</span>
                </div>
                <span className={styles.discount}>{`Save ₹${props.actualPrice - props.price} on this purchase`}</span>
            </div>
        </div>
    )
}
export default Product;