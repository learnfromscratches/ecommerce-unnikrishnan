import UserNavbar from "./components/usernavbar";
import withAuth from "@/utils/withAuth";

const MyOrders = () =>{
    return(
        <div>
            <UserNavbar currentPage = "myorders"/>
            <h1>My Orders</h1>
        </div>
    )
}
export default withAuth(MyOrders);