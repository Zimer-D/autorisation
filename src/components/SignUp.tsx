import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useAppDispatch } from "hooks/reduxHooks";
import { useNavigate } from "react-router-dom";
import { setUser } from "store/slice/userSlice";
import Form from "./Form";


const SignUp = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const handleRegister = (email:string, password:string) => {
        const auth = getAuth()
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            dispatch(setUser({
                email: user.email,
                id: user.uid,
                token:user.refreshToken
            }))
            navigate('/')
        })
        .catch(console.error)
     }

    return (
        <>
            <Form
                title='Register!'
                handleClick={handleRegister}
            />
        </>
    );
}

export default SignUp;