import styles from '@/styles/Home.module.css'
import UserNavbar from './components/usernavbar'
import Chips from './components/chips'
import Product from './components/product'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import instance from '../utils/axios'

export default function Home() {

  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])

  const fetchApi = async () => {
    const productData = await instance.get("/product")
    const product = productData.data.data;
    setProduct(product)
  }

  const fetchCategoryApi =async () =>{
    const categoryData = await instance.get('/category')
    console.log(categoryData.data )
    setCategory(categoryData.data)
  }

  useEffect(() => { fetchApi()
     fetchCategoryApi() }, [])

  const onChipClick = async id => {
    console.log(id)
    // if (name == "All") {
    //   const products = await instance.get(`/product`);
    //   const convertedProducts = await products.json();
    //   setProduct(convertedProducts);
    // } else {
      const products = await instance.get(`/product?category=${id}`);
      console.log(products.data.data)
      // const convertedProducts = await products.json();
      setProduct(products.data.data);
    // }
  }
    return (
      <div className={styles.home}>
        <UserNavbar currentPage="home" />
        <div className={styles.promotionBanner}>
          <Image src='/images/banner.jpeg' priority="true" width={1526} alt="failed to render banner image" height={380} quality={100} className={styles.homeBanner} />
        </div>
        <div className={styles.homeCategory}>
          <h3>Shop by category</h3>
          <div className={styles.categoryChip}>
            {category.map((item,index) => {
              return (
                <Chips key = {index} id={item._id} chipsClass={"chips"} onClick={onChipClick} text={item.name}/>
              )
            })}
          </div>
        </div>
        <div className={styles.products}>
          {product.map((item,index) => {
            return (
              <Product key = {index} {...item} />
            )
          })}
        </div>
      </div>
    )
  }
