import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className="absolute px-3 md:px-20 md:py-2 z-10 font-extrabold">
            <img className="w-32 h-20 md:w-40 md:h-20"
                src={LOGO}
                alt="logo" />
        </div>
    )
}

export default Header;