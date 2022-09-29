import {useNavigate} from 'react-router-dom'
import { setUser } from "store/slice/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from "./Form";
import { useAppDispatch } from "hooks/reduxHooks";



const Login = () => {
    const dispatch = useAppDispatch();
   const navigate = useNavigate()
    const handleLogin = (email:string, password:string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(setUser({
                email: user.email,
                id:user.uid,
                token: user.refreshToken,
            }))
            navigate('/')
        })
        .catch(console.error)
     }
     
    return (
        <>
        <LoginForm
        title = "Login" 
        buttonText = "Sign in!"
        handleClick={handleLogin}
        />
        </>
    );
}

export default Login;