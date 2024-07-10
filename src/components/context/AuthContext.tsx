import {createContext, PropsWithChildren, useState} from 'react';

interface IAuthContext {
    user: User;
    login: ()=>void
    signup: ()=>void
    logout: () => void
}


export const AuthContext = createContext<IAuthContext>({
    user: {},
    login: ()=>{},
    signup: ()=>{},
    logout: ()=>{}
})

const AuthContextProvider = ({children}: PropsWithChildren) => {
    const [user, setUser] = useState<User>(null)

    const signin = (email, password)=>{}

    const signout = ()=>{}

    return <AuthContext.Provider value={{
        user,
        signin,
        signout
    }}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextProvider;