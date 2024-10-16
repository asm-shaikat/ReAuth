import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState} from 'react';
import auth from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [LoginUserinfo,setLoginUserinfo] = useState("");
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setLoginUserinfo(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[])
    const authInfo = {createUser,loginUser,LoginUserinfo};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;