import styles from "@/styles/userregistration.module.css"
import Button from "../components/button";
import Input from "../components/input"
import { useState } from "react";
import instance from "../../utils/axios";
const UserRegistration = () =>{

    const [userForm, setUserForm] = useState({name :"",username :"",email : "",role : "user",password :"",confirmPassword : ""})

    const onChange = (e,key) =>{
        setUserForm({...userForm,[key] : e.target.value})
        console.log(userForm)
    }
    const onClick = async()=>{
        const postResult = await instance.post('/sign-up',userForm)
        console.log(postResult)
    }
    return(
        <div className={styles.userRegistration}>
            <h1>User Registration</h1>
            <Input type = "text" label = "Name" placeholder = "John Doe" onChange = {e=>onChange(e,"name")}/>
            <Input type = "text" label = "Username" placeholder = "username" onChange = {e=>onChange(e,"username")}/>
            <Input type = "text" label = "Email" placeholder = "johndoe@domain.com" onChange = {e=>onChange(e,"email")}/>
            <Input type = "password" label = "Password" placeholder = "password" onChange = {e=>onChange(e,"password")}/>
            <Input type = "password" label = "Confirm password" placeholder = "Confirm password" onChange = {e=>onChange(e,"confirmPassword")}/>
            <Button text = "Register" onClick = {onClick}/>
        </div>
    )
}
export default UserRegistration;