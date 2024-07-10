import InputField from "@/components/ui/InputField.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const SignUp = () => {
    return (<div className='w-screen h-screen flex flex-col items-center justify-center'>
        <h1 className='font-bold text-3xl mb-5'>Sign up</h1>
        <form>
            <div className='w-96 h-auto flex flex-col gap-5'>
                <div className='flex flex-row gap-5'>
                    <InputField label='Name' placeholder='Name' type='text'/>
                    <InputField label='Last name' placeholder='Last name' type='text'/>

                </div>
                <InputField label='Email' placeholder='Email' type='email'/>
                <InputField label='Password' placeholder='Password' type='password'/>

                <Button type='submit'>Sign up</Button>
            </div>
        </form>
        <p className='font-bold text-xl my-5'>or</p>
        <p>Already have an account? <Link to='/login' className='text-primary hover:underline'>Log in</Link></p>
    </div>);
};

export default SignUp;