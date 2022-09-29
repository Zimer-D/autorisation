import ContactList from "contact-list";
import { useAppDispatch } from "hooks/reduxHooks";
import { useAuth } from "hooks/useAuth";
import { Button } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { removeUser } from "store/slice/userSlice";
import './HomePage.sass'


const HomePage = () => {
    const dispatch = useAppDispatch();
    const { isAuth, email } = useAuth();
    return (
        <>
            {isAuth ?
                <>
                    <header className="header">
                        Contact list
                    <Button
                     variant="outline-dark"
                        onClick={() => dispatch(removeUser())}
                    >
                        Log out
                    </Button>
                    </header>
                    <ContactList />
                </>
                :
                <Navigate replace to="/login" />
            }
        </>
    );
}

export default HomePage;