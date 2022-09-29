import SignUp from "components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "30px", flexDirection: 'column' }}>
                <SignUp />
                <p>Have an account? <Link to="/login">Just login!</Link></p>
            </div>
        </>
    );
}

export default RegisterPage;