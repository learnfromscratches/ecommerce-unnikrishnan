import styles from "@/styles/products.module.css"
import { CheckBox } from "@mui/icons-material";
import SelectSmall from "../components/select";
import CustomCheckbox from "../components/checkbox";
import UserNavbar from "../components/usernavbar"
import Product from "../components/product";
import { useState, useEffect } from "react";

const Products = () => {

    const [products,setProduct] = useState([]);

    const fetchApi = async() =>{
        const result = await fetch("/api/product");
        const res = await result.json();
        console.log(res)
        setProduct(res)
    }

    useEffect(()=>{fetchApi()},[])
    return (
        <div>
            <UserNavbar currentPage="produts" />
            <section className={styles.products}>
                <div className={styles.filterPane}>
                    <h1>Filters</h1>
                    <h4 className={styles.filterHeading}>Brands</h4>
                    <CustomCheckbox label="Samsung" />
                    <CustomCheckbox label="Apple" />
                    <CustomCheckbox label="Mi" />
                    <CustomCheckbox label="RealMe" />
                    <h4 className={styles.filterHeading}>Category</h4>
                    <CustomCheckbox label="Smart Phone" />
                    <CustomCheckbox label="Feature Phone" />
                    <CustomCheckbox label="Watches" />
                    <CustomCheckbox label="Earphones" />
                </div>
                <div className={styles.productDisplay}>
                    <h1>Latest products</h1>
                    <SelectSmall />
                    <div className={styles.showProducts}>
                        {products.map(item => {
                            return (
                                <Product {...item}/>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Products;