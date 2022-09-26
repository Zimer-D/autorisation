import Login from "components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
    <>
    <div>Login</div>
    <Login />
    <p>Or <Link to="/register">register</Link></p>
    </>
     );
}
 
export default LoginPage;