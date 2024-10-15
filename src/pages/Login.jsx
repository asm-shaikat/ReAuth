import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useRef, useState } from "react";

const Login = () => {
  const [LoginError, setLoginError] = useState("");
  const [LoginSuccess, setLoginSuccess] = useState("");
  const emailRef = useRef(null);
  const [forgetPassword,setForgetPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setLoginSuccess("Successfully logged in");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoginError(errorMessage);
    });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setForgetPass("Check your email to get your rest password");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
    
      <div className="w-full max-w-md shadow-2xl bg-base-100 p-8 rounded-lg">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <label className="label">
              <a  className="label-text-alt link link-hover" onClick={handleForgetPass }>
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <Link className="text-primary link link-hover" to={"/signup"}>Sign up</Link>
          </p>
        </div>
        {
          LoginError && (
            <div className="text-red-500 text-center mt-2">{LoginError}</div>
          )
        }
        {
          LoginSuccess && (
            <div className="text-green-500 text-center mt-2">{LoginSuccess}</div>
          )
        }
        {
          forgetPassword && (
            <div className="text-green-500 text-center mt-2">{forgetPassword}</div>
          )
        }
      </div>
    </div>
  );
};

export default Login;
