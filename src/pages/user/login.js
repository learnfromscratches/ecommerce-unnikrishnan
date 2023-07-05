import styles from "@/styles/userlogin.module.css"
import Input from "../components/input";
import Button from "../components/button";
import { useRef } from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import instance from "@/utils/axios";
import { setToken, setUser } from "../../utils";
import { useRouter } from "next/router";

const UserLogin = () => {

    const router = useRouter()

    const [loginData, setLoginData] = useState({username : "",password :""})

    const usernameRef = useRef();
    const passwordRef = useRef();
    const buttonRef = useRef();

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    const onKeyDown = (e, field) => {
        if (e.key == 'Enter' && field == "username") {
            passwordRef.current.focus()
        }else if(e.key == 'Enter' && field == "password"){
            buttonRef.current.click()
            buttonRef.current.focus()
        }
    }
    const onClick = async()=>{
        try{
        const loginValue = await instance.post('/login',loginData)
        setToken(loginValue.data.token)
        setUser(loginValue.data.userId)
        router.push('/')
        }catch(e){
            console.log(e)
        }
    }

    const onChange = (e,key) =>{
        setLoginData({...loginData, [key] : e.target.value})
        console.log(e.target.value)
    }

    return (
        <div>
            <div className={styles.userLogin}>
                <h1 className={styles.heading}>Shopy login</h1>
                <Input reference={usernameRef} type="text" onChange = {(e)=>{onChange(e,"username")}}label="Usrename" placeholder="John Doe" onKeyDown={e => onKeyDown(e, "username")} />
                <Input reference={passwordRef} type="password" onChange = {(e)=>{onChange(e,"password")}}label="Password" placeholder="*******" onKeyDown={e => onKeyDown(e, "password")} />
                <Button reference={buttonRef} type="submit" text="Login" onClick = {onClick}onKeyDown={e => onKeyDown(e, "button")} />
            </div>
        </div>
    )
}
export default UserLogin;