import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateForm } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const message = checkValidateForm( email.current.value, password.current.value)
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, { displayName: username.current.value })
                        .then(() => {
                            const { uid, email, displayName } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, }));
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            setErrorMessage(errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }

    const handleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className="fixed h-screen w-screen">
            <Header />
            <img
                className="h-screen w-screen object-cover brightness-40"
                src={BG_LOGO}
                alt="bg-logo"
            />
            <form
                onSubmit={(e) => e.preventDefault()}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                            bg-black/70 p-15 w-[450px] rounded-lg shadow-lg text-white">

                <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input
                        ref={username}
                        type="text"
                        placeholder="User Name"
                        className="w-full p-3 mb-4 rounded bg-[#333] focus:outline-none"
                    />
                )}
                <input
                    ref={email}
                    type="email"
                    placeholder="Email or phone number"
                    className="w-full p-3 mb-4 rounded bg-[#333] focus:outline-none"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 mb-2 rounded bg-[#333] focus:outline-none"
                />
                <p className="text-red-500 py-2 font-bold">{errorMessage}</p>
                <button
                    className="w-full bg-red-600 hover:bg-red-700 transition p-3 rounded font-semibold cursor-pointer"
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="mt-4 text-sm text-gray-400">
                    {isSignInForm ? "New to Netflix-Gem?" : "Already have a Account?"}
                    <span className="text-white hover:underline cursor-pointer"
                        onClick={handleSignInForm}> {isSignInForm ? "Sign Up Now" : "Sign In Now"}</span>
                </p>
            </form>
        </div>
    );
};

export default Login;