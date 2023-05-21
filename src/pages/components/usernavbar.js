import SearchBar from "./search"
import styles from "./usernavbar.module.css"
import Link from "next/link"
import { UilShoppingCart } from '@iconscout/react-unicons'

const UserNavbar = props =>{
    return(
        <div className = {styles.userNavbar}>
            <div className={styles.navLeft}>
                <UilShoppingCart className = {styles.navIcon}/>
                <h1 className={styles.navLogo}>Shopy</h1>
            </div>
            <SearchBar placeholder = "search products..."/>
            <div className={styles.navRight}>
                <span>
                    <Link className={props.currentPage == "home"? styles.active : null} href={'/'}>Home</Link>
                </span>
                <span className={props.currentPage == "myorders"? styles.active : null}>
                    <Link href={'/myorders'}>My orders</Link>
                </span>
                <span className={props.currentPage == "cart"? styles.active : null}>
                    <Link href={'/cart'}>Cart</Link>
                </span>
                <span className={props.currentPage == "account"? styles.active : null}>
                    <Link href={'/account'}>Account</Link>
                </span>
            </div>
        </div>
    )
}
export default UserNavbar;