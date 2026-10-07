'use client'

import { signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";




const SignUpPage = () => {


    const onSubmit =async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
         const formData = new FormData(e.target);
         const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};

         const {data, error} = await signUp.email(
            {
                ...user,
            }
         )
         if(data){
            console.log(data)
            redirect("/");
         }

         if(error){
            console.log(error)

         }
    }



  return (
    <div className="flex flex-col items-center my-10">
        
        <h2 className="my-3 text-xl font-bold">সাইন আপ করুন</h2>
        <form onSubmit={onSubmit}>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">


                <label className="label">নাম</label>
                <input 
                name='name' 
                type="text" 
                className="input" 
                placeholder="Jone duoe" />

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

                <button className="btn btn-neutral mt-4" type="submit">সাইন আপ</button>
            </fieldset>
      </form>
    </div>
  );
};

export default SignUpPage;
