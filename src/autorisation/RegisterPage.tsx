import SignUp from "components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return ( 
        <>
        <div>Registration</div>
        <SignUp />
        <p>Have an account? <Link to="/login">Just login!</Link></p>
        </>
     );
}
 
export default RegisterPage;