import Login from "./../components/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px", flexDirection: 'column'}}>
                <Login />
                <p>or <Link to="/register">register</Link></p>
            </div>
        </>
    );
}

export default LoginPage;