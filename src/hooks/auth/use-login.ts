import {useMutation} from "@tanstack/react-query";
import {client} from "@/api/apiService.ts";
import useLocalStorage from "@/hooks/use-local-storage.ts";


type UserLoginData = {
    email: string
    password: string
}

const useLogin = () => {

    const [setAccessToken] = useLocalStorage('access-token')
    const [setRefreshToken] = useLocalStorage('refresh-token')

    return useMutation({
        mutationFn: async (data: UserLoginData) => await client.post('/auth/signin', {
            username: data.email,
            password: data.password
        }).then(res => res),
        onSuccess: (res) => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
        }
    })
}
export default useLogin