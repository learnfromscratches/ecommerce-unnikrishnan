import UserNavbar from "./components/usernavbar";
import withAuth from "@/utils/withAuth";

const Account = () =>{
    return(
        <div>
            <UserNavbar currentPage = "account"/>
            <h1>Account</h1>
        </div>
    )
}
export default withAuth(Account);