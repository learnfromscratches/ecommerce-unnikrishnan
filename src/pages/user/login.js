import styles from "@/styles/userlogin.module.css"
import Input from "../components/input";
import Button from "../components/button";

const UserLogin = () =>{
    return(
        <div>
            <div className={styles.userLogin}>
                <h1 className={styles.heading}>Shopy login</h1>
                <Input type = "text" label = "Usrename" placeholder = "John Doe"/>
                <Input type = "password" label = "Password" placeholder = "*******"/>
                <Button type = "submit" text = "Login"/>
            </div>
        </div>
    )
}
export default UserLogin;