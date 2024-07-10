import {AuthContext} from "@/components/context/AuthContext.tsx";
import {useContext} from "react";

const UseAuth = (): {
    user: User,
    login: () => void,
    logout: () => void,
} => {
    return useContext(AuthContext)
};

export default UseAuth;