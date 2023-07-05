import UserNavbar from "./components/usernavbar";
import withAuth from "@/utils/withAuth";
import CartComponent from "./components/cart";
import { getUser } from "@/utils"
import instance from "@/utils/axios"
import { useEffect, useState } from "react"

const Cart = () => {

    const [cart, setCart] = useState([])

    const fetchCart = async () => {
        const cartData = await instance.get(`/cart/${getUser()}`)
        console.log(cartData.data.items)
        setCart(cartData.data.items)
    }

    useEffect(() => {
        fetchCart()
    }, cart)

    const cancelOrder = async (item) => {
            console.log(item._id)
            await instance.post(`/cart/delete/${getUser()}`, { product: item._id })
    }

    return (
        <div>
            <UserNavbar currentPage="cart" />
            <h1>Cart</h1>
            {
                cart.map((items, index) => {
                    return (
                        <CartComponent key={index} {...items} onClick={(itmes) => cancelOrder(items)} />
                    )
                })
            }
        </div>
    )
}
export default withAuth(Cart);