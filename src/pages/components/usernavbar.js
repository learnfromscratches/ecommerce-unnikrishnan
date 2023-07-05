import SearchBar from "./search"
import styles from "./usernavbar.module.css"
import Link from "next/link"
import { UilShoppingCart } from '@iconscout/react-unicons'
import { getToken, getUser, removeToken, removeUser } from "../../utils"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const UserNavbar = props =>{
    const router = useRouter()
    const [token,setToken] = useState("")
    const [userId,setUserId] = useState("")
    const [search,setSearch] = useState("")

    const onChange = (e) =>{
        setSearch(e.target.value)
        console.log(search)
    }

    const onKeyDown = (e) =>{
        if(e.key  == "Enter"){
            router.push(`/products?search=${search}`)
        }
    }

    useEffect(()=>{
        setToken(getToken())
        setUserId(getUser())
        
    },[])

    const logout = ()=>{
        removeToken()
        removeUser()
        router.push('/user/login')
    }

    return(
        <div className = {styles.userNavbar}>
            <div className={styles.navLeft}>
                <UilShoppingCart className = {styles.navIcon}/>
                <h1 className={styles.navLogo}>Shopy</h1>
            </div>
            <SearchBar placeholder = "search products..." onChange = {onChange} onKeyDown = {onKeyDown}/>
            <div className={styles.navRight}>
                <span>
                    <Link className={props.currentPage == "home"? styles.active : styles.off} href={'/'}>Home</Link>
                </span>
                <span>
                    <Link className={props.currentPage == "produts"? styles.active : styles.off} href={'/products'}>Products</Link>
                </span>
                <span>
                    <Link className={props.currentPage == "myorders"? styles.active : styles.off} href={'/myorders'}>My orders</Link>
                </span>
                <span >
                    <Link className={props.currentPage == "cart"? styles.active : styles.off} href={'/cart'}>Cart</Link>
                </span>
                <span >
                    <Link className={props.currentPage == "account"? styles.active : styles.off} href={'/account'}>Account</Link>
                </span>
                <span >
                    {
                        token ? <span onClick={()=>logout()}>  Logout</span> : <Link className={props.currentPage == "login"? styles.active : styles.off} href={'/user/login'}>Login</Link>
                    }
                </span>
            </div>
        </div>
    )
}
export default UserNavbar;