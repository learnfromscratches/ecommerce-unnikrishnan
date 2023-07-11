import Button from "../components/button";
import ImageInput from "../components/imageInput";
import Input from "../components/input";
import Select from "../components/selectbox";
import VendorNavbar from "../components/vendornavbar";
import styles from "@/styles/addproduct.module.css"
import { useState, useEffect } from "react";
import instance from "@/utils/axios";
import { imgInstance } from "@/utils/axios";
import { getUser } from "@/utils";
import { useRouter } from "next/router";

const AddProducts = () => {

    const [category, setCategory] = useState([])
    const router = useRouter()

    const fetchCategoryApi = async () => {
        const categoryData = await instance.get('/category')
        console.log(categoryData.data)
        setCategory(categoryData.data)
    }

    useEffect(() => {
        fetchCategoryApi()
    }, [])

    console.log(category)

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: 0,
        priceAfterDiscount: 0,
        category: "",
        quantity: 0,
        brand: "",
        isOutOfstock: false,
        mainImage: "",
    })

    const onInputChange = (e, field) => {
        if(["price","priceAfterDiscount","quantity"].includes(field)){
            setForm({ ...form, [field]: parseInt(e.target.value) })
        }else{
        setForm({ ...form, [field]: e.target.value })
        }
    }

    const onImageUpload = async(e) =>{
        const data = new FormData();
        data.append("file",e.target.files[0])

        const url = await imgInstance.post('/upload',data)
        console.log(url.data.url)
        setForm({...form, mainImage : url.data.url})
    }

    const onAddProduct = async() =>{
        const data = {...form}
        data.seller = getUser()
        console.log(data)
        await instance.post('/product',data)
        router.push('/vendor')
    }

    console.log(form)

    return (
        <div>
            <VendorNavbar />
            <h1>Add products</h1>
            <div className={styles.form}>
                <div className={styles.leftPane}>
                    <Input label="Product title" inputCls="addproduct" onChange={(e) => { onInputChange(e, "title") }} />
                    <Input label="Description" inputCls="addproduct" onChange={(e) => { onInputChange(e, "description") }} />
                    <Input type="number" label="Price" inputCls="addproduct" onChange={(e) => { onInputChange(e, "price") }} />
                    <Input type="number" label="Price after discount" inputCls="addproduct" onChange={(e) => { onInputChange(e, "priceAfterDiscount") }} />
                    <ImageInput label="Upload product image" onChange = {onImageUpload} inputCls="imageUpload"/>
                </div>
                <div className={styles.rightPane}>
                    <Input label="Quantity" inputCls="addproduct" onChange={(e) => { onInputChange(e, "quantity") }} />
                    <Input label="Brand" inputCls="addproduct" onChange={(e) => { onInputChange(e, "brand") }} />
                    <Select label="Is out of stock" inputCls="addproduct" valueKey = "value"
                        options={[{ name: "Yes", value: "true" }, { name: "No", value: "false" }]} onChange={(e) => { onInputChange(e, "isOutOfstock") }} />
                    {/* <Input label="Product title" inputCls="addproduct" /> */}
                    <Select label="Select category" options={category} valueKey="_id" onChange={(e) => { onInputChange(e, "category") }}/>
                    <Button text="Submit" onClick = {onAddProduct} />
                </div>

            </div>
        </div >
    )
}

export default AddProducts;