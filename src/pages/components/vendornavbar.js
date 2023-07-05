import SearchBar from "./search"
import styles from "./vendornavbar.module.css"
import Link from "next/link"
import { UilShoppingCart } from '@iconscout/react-unicons'

const VendorNavbar = props =>{
    return(
        <div className = {styles.vendorNavbar}>
            <div className={styles.navLeft}>
                <UilShoppingCart className = {styles.navIcon}/>
                <h1 className={styles.navLogo}>Shopy</h1><span>Vendor</span>
            </div>
            <SearchBar placeholder = "search products..."/>
            <div className={styles.navRight}>
                <span>
                    <Link className={props.currentPage == "home"? styles.active : null} href={'vendor'}>Home</Link>
                </span>
                <span className={props.currentPage == "myorders"? styles.active : null}>
                    <Link href={'/myorders'}>My orders</Link>
                </span>
                <span className={props.currentPage == "offers"? styles.active : null}>
                    <Link href={'/cart'}>Offers</Link>
                </span>
                <span className={props.currentPage == "account"? styles.active : null}>
                    <Link href={'/account'}>Account</Link>
                </span>
            </div>
        </div>
    )
}
export default VendorNavbar;