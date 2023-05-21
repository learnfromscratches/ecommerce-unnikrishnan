import styles from '@/styles/Home.module.css'
import UserNavbar from './components/usernavbar'
import Chips from './components/chips'
import Product from './components/product'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {

  const [product,setProduct] = useState([])

  const fetchApi = async() =>{
    const result = await fetch("/api/product")
    const convertedResult = await result.json()
    setProduct(convertedResult)
  }

  useEffect(()=>{fetchApi()},[])
  console.log({product})

  const chips = ["Mobile phone", "Laptop", "Furniture", "Men's clothing", "Women's clothing"]
  // const products = [{ Brand: "Apple", Category: "Mobile phone", name: "Iphone 14 pro max", price: 102300, image: "/images/mobile.jpeg" },
  // { Brand: "Asus", category: "Laptop", name: "ASUS Vivobook 16X (2022)", price: 47990, image: "/images/asus.jpg" }]

  return (
    <div className={styles.home}>
      <UserNavbar currentPage="home" />
      <div className={styles.promotionBanner}>
        <Image src='/images/back_to_school.jpg' priority="true" width= {1526} alt="failed to render banner image" height= {380} quality={100} className={styles.homeBanner} />
      </div>
      <div className={styles.homeCategory}>
        <h3>Shop by category</h3>
        <div className={styles.categoryChip}>
          {chips.map(item => {
            return (
              <Chips chipsClass={"chips"} text={item} />
            )
          })}
        </div>
      </div>
      <div className={styles.products}>
        {product.map(item => {
          return (
            <Product {...item} />
          )
        })}
      </div>
    </div>
  )
}
