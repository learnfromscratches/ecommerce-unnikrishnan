import styles from "@/styles/vendorregistration.module.css"
import Button from "../components/button";
import Input from "../components/input"
const VendorRegistration = () =>{
    return(
        <div className={styles.vendorRegistration}>
            <h1>User Registration</h1>
            <Input type = "text" label = "First name" placeholder = "John"/>
            <Input type = "text" label = "Surname" placeholder = "Doe"/>
            <Input type = "email" label = "Enter email id" placeholder = "johndoe@domain.com"/>
            <Input type = "text" label = "Phone number" placeholder = "+919876543210"/>
            <Input type = "text" label = "Address" placeholder = "House number"/>
            <Input type = "text" label = "Place" placeholder = "Enter city"/>
            <Input type = "text" label = "Zip code" placeholder = "789654"/>
            <Input type = "text" label = "State" placeholder = "Kerala"/>
            <Button text = "Register"/>
        </div>
    )
}
export default VendorRegistration;