import {AuthContext, IAuthContext} from "@/components/context/AuthContext.tsx";
import {useContext} from "react";

const UseAuth = ():IAuthContext => {
    return useContext(AuthContext);
};

export default UseAuth;