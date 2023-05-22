import styles from "@/styles/products.module.css"
import { CheckBox } from "@mui/icons-material";
import SelectSmall from "../components/select";
import CustomCheckbox from "../components/checkbox";
import UserNavbar from "../components/usernavbar"
import Product from "../components/product";
import { useState, useEffect } from "react";
import { buildQuery } from "@/utils";

const Products = () => {

    const [products,setProduct] = useState([]);
    const [brands,setBrands] = useState([])
    const [categories,setCategory] = useState([])

    const fetchApi = async() =>{
        const result = await fetch("/api/product");
        const res = await result.json();
        console.log(res)
        setProduct(res)
    }

    useEffect(()=>{fetchApi()},[])

    const handleBrandCheckbox = (e,label) =>{
        if(e.target.checked){
            setBrands([...brands,label])
            callFilterApi([...brands,label],categories)
            // console.log(brands,categories)
        }
        else{
            const filteredBrands = brands.filter(item => item!=label)
            setBrands(filteredBrands)
            callFilterApi(filteredBrands,categories)
            console.log(brands,categories)
        }
    }
    const handleCategoryCheckbox = (e,label) =>{
        if(e.target.checked){
            setCategory([...categories,label])
            setCategory([...categories,label])
            callFilterApi(brands,[...categories,label])
        }
        else{
            const filteredCategories = categories.filter(item => item!=label)
            setCategory(filteredCategories)
            callFilterApi(brands,filteredCategories)
        }
    }
    const callFilterApi = async (brands,categories) =>{
        let queryBrands = buildQuery("brand",brands);
        let queryCategory = buildQuery("category",categories)
        let query = queryBrands + queryCategory;
        console.log(query)
        const result = await fetch(`http://localhost:3000/api/product?${query}`);
        const res = await result.json();
        setProduct(res)
    }
    return (
        <div>
            <UserNavbar currentPage="produts" />
            <section className={styles.products}>
                <div className={styles.filterPane}>
                    <h1>Filters</h1>
                    <h4 className={styles.filterHeading}>Brands</h4>
                    <CustomCheckbox label="Samsung" onCheckboxClick = {handleBrandCheckbox}/> 
                    <CustomCheckbox label="Apple" onCheckboxClick = {handleBrandCheckbox}/>
                    <CustomCheckbox label="Sony" onCheckboxClick = {handleBrandCheckbox} />
                    <CustomCheckbox label="RealMe" onCheckboxClick = {handleBrandCheckbox} />
                    <h4 className={styles.filterHeading}>Category</h4>
                    <CustomCheckbox label="Mobile phones" onCheckboxClick = {handleCategoryCheckbox}/>
                    <CustomCheckbox label="Laptop" onCheckboxClick = {handleCategoryCheckbox}/>
                    <CustomCheckbox label="Watches" onCheckboxClick = {handleCategoryCheckbox}/>
                    <CustomCheckbox label="Earphones" onCheckboxClick = {handleCategoryCheckbox}/>
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