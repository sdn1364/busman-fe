import {AuthContext} from "@/components/context/AuthContext.tsx";
import {useContext} from "react";

const UseAuth = () => {
    return useContext(AuthContext)
};

export default UseAuth;