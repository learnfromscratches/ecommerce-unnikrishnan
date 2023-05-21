import styles from "@/styles/vendorlogin.module.css"
import Input from "../components/input";
import Button from "../components/button";

const VendorLogin = () =>{
    return(
        <div>
            <div className={styles.vendorLogin}>
                <h1 className={styles.heading}>Vendor login</h1>
                <Input type = "text" label = "Usrename" placeholder = "John Doe"/>
                <Input type = "password" label = "Password" placeholder = "*******"/>
                <Button type = "submit" text = "Login"/>
            </div>
        </div>
    )
}
export default VendorLogin;