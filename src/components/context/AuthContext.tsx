import {createContext, PropsWithChildren} from 'react';
import useLogin from "@/hooks/auth/use-login.ts";

type UserLoginData = {
    email: string
    password: string
}

export interface IAuthContext {
    login: (data: UserLoginData) => void
    signup: () => void
    logout: () => void
}

export interface IUserContext {
    user: User
}

export const AuthContext = createContext<IAuthContext>({
    login: () => {
    },
    signup: () => {
    },
    logout: () => {
    }
})

export const UserContext = createContext<IUserContext>({
    user: {
        email: '',
        name: '',
        lastName: ''
    }
})

const AuthProvider = ({children}: PropsWithChildren) => {

    const mutation = useLogin()

    const login = (data: UserLoginData) => {
        mutation.mutate(data)
    }

    const logout = () => {
    }
    const signup = () => {
    }

    return <AuthContext.Provider value={{
        login,
        signup,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;