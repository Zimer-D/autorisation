import { useAppDispatch } from "hooks/reduxHooks";
import { useAuth } from "hooks/useAuth";
import { Navigate } from "react-router-dom";
import { removeUser } from "store/slice/userSlice";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { isAuth, email } = useAuth();
    return (
        <>
            {isAuth ?
                <>
                    <div>Main page</div>
                    <button
                        onClick={() => dispatch(removeUser())}
                    >
                        Log out
                    </button>
                </>
                :
                <Navigate replace to="/login" />
            }
        </>
    );
}

export default HomePage;