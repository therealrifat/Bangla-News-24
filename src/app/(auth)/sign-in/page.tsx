'use client'

import { signIn } from "@/lib/auth-client";

const SignInPage = () => {
    const onSubmit = async(e: React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as {email: string, password: string}
        console.log(user)
        
        const {data, error} = await signIn.email(
            {
                ...user,
                callbackURL: "/category/politics"
            }
        )
       if(data){
         alert("Sign in Succesfull")
       }
       if(error){
        alert("Sign in Succesfull")
       }

        

    }
    return (
         <div className="flex flex-col items-center my-10">
            <h2 className="my-3 text-xl font-bold">সাইন ইন করুন</h2>
        <form onSubmit={onSubmit}>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
                <label className="label">ইমেইল </label>

                <input 
                name='email'
                type="email" 
                className="input" 
                placeholder="Email" />

                <label className="label">পাসওয়ার্ড</label>


                <input
                name="password" 
                type="password" 
                className="input" 
                placeholder="Password" />

                <button className="btn btn-neutral mt-4" type="submit">সাইন ইন</button>
            </fieldset>
      </form>
    </div>
    );
};

export default SignInPage;