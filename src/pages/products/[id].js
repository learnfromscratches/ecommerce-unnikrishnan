import styles from "@/styles/Productview.module.css"
import Image from "next/image";
import UserNavbar from "../components/usernavbar";
import Chips from "../components/chips";
import Button from "../components/button";
import { UilShoppingBag } from '@iconscout/react-unicons'
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import ImageViewer from "../components/imageviewer";

const ProductView = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState({});
  
    const getProductFromApi = async () => {
      if (id) {
        const product = await fetch(`http://localhost:3000/api/product/${id}`);
        const jsonProduct = await product.json();
        setProduct(jsonProduct);
      }
    };
  
    useEffect(() => {
      getProductFromApi();
    }, [id]);
  
    return (
        <div>
            <UserNavbar />
            <div className={styles.mainView}>
                <div className={styles.imageViewer}>
                    {/* <Image src="/images/macbook_2020.jpg" width={400} height={400} /> */}
                    <ImageViewer thumbnailImage={product.thumbnailImage} imgArray={product.image}/>
                </div>
                <div className={styles.productDesc}>
                    <div className={styles.productDetails}>
                        <h3 className="">{product.title}</h3>
                        <div className={styles.category}>
                            <Chips chipsClass="productInfo" text={product.category}/>
                            <Chips chipsClass="productInfo" text={product.brand}/>
                        </div>
                        <div className={styles.priceDetails}>
                            <span className={styles.salesPrice}>{product.price}</span>
                            <span className={styles.actualPrice}>{product.actualPrice}</span>
                            <span className={styles.discount}>{`Save ₹${product.actualPrice - product.price} on this purchase`}</span>
                        </div>
                        <div className={styles.description}>
                            {(product.description || [].map(item=>{
                                <p>{item}</p>
                            }))}
                        </div>
                        <div className={styles.userAction}>
                            <Button btnCls="buyNow" text = "Buy now" icon ={<UilShoppingBag/>}/>
                            <Button btnCls="addToCArt" text="Add to Cart"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductView;