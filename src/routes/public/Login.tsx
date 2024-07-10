import {Button} from "@/components/ui/button.tsx";
import { useForm } from 'react-hook-form'
import InputField from "@/components/ui/InputField.tsx";
import {z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";
import useAuth from "@/hooks/auth/use-auth.ts";
import {Link} from "react-router-dom";

const LoginSchema = z.object({
    email: z.string({ message: 'Email address is required' }).email({message: 'Please enter valid email address'}),
    password: z.string().min(6,'Password must be at least 6 character' ).max(20)
})

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Login = () => {

    const { login } = useAuth()

    const {register, handleSubmit, formState:{ errors }} = useForm<LoginSchemaType>({ resolver: zodResolver(LoginSchema) });

    const signIn = (data:LoginSchemaType)=>{
        login(data)
    }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className='font-bold text-3xl'>Login</h1>
            <form onSubmit={handleSubmit(signIn)}>
                <div className='w-96 h-auto flex flex-col gap-5'>
                    <InputField error={errors.email} label='Email' placeholder='Email' type='email' {...register('email')} />
                    <InputField error={errors.password} label='Password' placeholder='Password' type='password' {...register('password', {required: true})} />
                    <Button type='submit'>Sign in</Button>
                    <Button variant='outline'>Login with Google</Button>
                </div>
            </form>
            <p className='font-bold text-xl my-5'>or</p>
            <p>Don't have an account <Link to='/signup' className='text-primary hover:underline'>Sing up</Link></p>
        </div>
    );
};

export default Login;