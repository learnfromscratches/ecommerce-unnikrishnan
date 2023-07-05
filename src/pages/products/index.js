import styles from "@/styles/products.module.css"
import { CheckBox } from "@mui/icons-material";
import SelectSmall from "../components/select";
import CustomCheckbox from "../components/checkbox";
import UserNavbar from "../components/usernavbar"
import Product from "../components/product";
import { useState, useEffect } from "react";
import { buildQuery } from "@/utils";
import { useRouter } from "next/router";
import instance from "../../utils/axios";

const Products = () => {
    const router = useRouter()

    console.log(router.query)

    const [products, setProduct] = useState([]);
    const [brands, setBrands] = useState([])
    const [categories, setCategory] = useState([])
    const [fetchBrand, setFetchBrand] = useState([])
    const [categoryData, setCategoryData] = useState([])

    const fetchApi = async () => {
        const result = await instance.get("/product");
        // const res = await result.json();
        console.log(result.data.data)
        setProduct(result.data.data)
    }
    const getProductsFromQuery = async () => {
        const products = await instance.get(`/product?title=${router.query.search}`)
        setProduct(products.data.data)
    }

    const fetchBrands = async () => {
        const fetchBrand = await instance.get('/product')
        await setFetchBrand(fetchBrand.data.data)
        console.log("Main result", fetchBrand)
    }

    const fetchCategory = async () => {
        const category = await instance.get('/category')
        await setCategoryData(category.data)
    }

    useEffect(() => {
        if (router.query.search) {
            getProductsFromQuery()
        }
        else {
            fetchApi()
        }
        fetchBrands()
        fetchCategory()
    }, [router.query])

    const handleBrandCheckbox = (e, label) => {
        if (e.target.checked) {
            setBrands([...brands, label])
            callFilterApi([...brands, label], categories)
            // console.log(brands,categories)
        }
        else {
            const filteredBrands = brands.filter(item => item != label)
            setBrands(filteredBrands)
            callFilterApi(filteredBrands, categories)
            console.log(brands, categories)
        }
    }
    const handleCategoryCheckbox = (e, filter) => {
        if (e.target.checked) {
            setCategory([...categories, filter])
            console.log([...categories, filter])
            // setCategory([...categories, label])
            callFilterApi(brands, [...categories, filter])
        }
        else {
            const filteredCategories = categories.filter(item => item != filter)
            setCategory(filteredCategories)
            callFilterApi(brands, filteredCategories)
        }
    }
    const callFilterApi = async (brands, categories) => {
        let queryBrands = buildQuery("brand", brands);
        let queryCategory = buildQuery("category", categories)
        let query = queryBrands + queryCategory;
        console.log(query)
        const result = await instance.get(`/product?${query}`);
        console.log("result is", result)
        // const res = await result.json();
        setProduct(result.data.data)
        console.log(products)
    }
    return (
        <div>
            <UserNavbar currentPage="produts" />
            <section className={styles.products}>
                <div className={styles.filterPane}>
                    <h1>Filters</h1>
                    <h4 className={styles.filterHeading}>Brands</h4>
                    {fetchBrand.map((item, index) => {
                        return (
                            <CustomCheckbox label={item.brand} filter={item.brand} key={index} onCheckboxClick={handleBrandCheckbox} />
                        )
                    })}

                    <h4 className={styles.filterHeading}>Category</h4>
                    {
                        categoryData.map((item, index) => {
                            return (
                                <CustomCheckbox label={item.name} filter={item._id} key={index} onCheckboxClick={handleCategoryCheckbox} />
                            )
                        })
                    }

                </div>
                <div className={styles.productDisplay}>
                    <h1>Latest products</h1>
                    <SelectSmall />
                    <div className={styles.showProducts}>
                        {products.map((item, index) => {
                            return (
                                <Product key={index} {...item} />
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Products;