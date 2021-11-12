import { useContext } from "react";
import { AuthContext } from "../Pages/Login/context/AuthProvider";


const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;