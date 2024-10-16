import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Signup = () => {
    const [user, setUser] = useState("");
    const [signupError, setSignupError] = useState("");
    const [signupSuccess, setSignupSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const {createUser} = useContext(AuthContext)

    const handleSignupForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;

        if (password !== cpassword) {
            setSignupError("Passwords do not match");
            return;
        }
        if (password.length < 6) {
            setSignupError("Password should be at least 6 characters long");
            return;
        }

        setSignupError("");

            createUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                setSignupSuccess("User registration successful")
            })
            .catch((error) => {
                setSignupError(error.message);
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Create an Account</h2>
                <form onSubmit={handleSignupForm}>
                    <div className="mb-4">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={ showPassword ? "text" : "password" }
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            className="shadow appearance-none border dark:border-gray-700 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirm-password"
                            type={showPassword ? "text" : "password" }
                            name="cpassword"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <div className="form-control pb-4">
                        <label className="cursor-pointer label">
                            <input type="checkbox" className="checkbox checkbox-info" onClick={() => setShowPassword(!showPassword)} />
                            <span className="label-text">Show Password</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                    {
                        signupError && (
                            <div className="text-red-500 text-xs mt-2">{signupError}</div>
                        )
                    }
                    {
                        signupSuccess && (
                            <div className="text-green-500 text-xs mt-2">{signupSuccess}</div>
                        )
                    }
                </form>
            </div>
        </div>
    );
};

export default Signup;
