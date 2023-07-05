import styles from "@/styles/vendorHome.module.css"
import VendorNavbar from "../components/vendornavbar";
import DataTable from "../components/table";
import { useState, useEffect } from "react";
import instance from "@/utils/axios";
import { getUser } from "@/utils";

const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'description', headerName: 'Description', width: 630 },
    {
      field: 'brand',
      headerName: 'Brand',
      width: 90,
    },
    {
      field: 'priceAfterDiscount',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,

    },
    {
      field : "category",
      headerName:"Category",
      sortable : false,
      width : 180,
      valueGetter : (params)=>{
        return params.row.category.name
      }
    }
  ];
  
const VendorHome = () =>{

    const [products, setProducts] = useState([])

    const getproducts = async() =>{
        const fetchResult = await instance.get(`/product?seller=${getUser()}`)
        setProducts(fetchResult.data.data)
        console.log(fetchResult.data.data)
    }
    useEffect(()=>{getproducts()},[])
    return(
        <div>
            <VendorNavbar currentPage="home"/>
            <DataTable columns={columns} rows={products}/>
        </div>
    )
}
export default VendorHome;