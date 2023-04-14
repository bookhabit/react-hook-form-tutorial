import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"
import { useState } from "react";

let renderCount = 0

type FormValues={
    username:string;
    email:string;
    channel:string;
    passwrod:string;
}

export const YoutubeForm = () => {
    const form = useForm<FormValues>();
    const {register,control,handleSubmit} = form

    const onSubmit = (data:FormValues)=>{
        console.log('Form submitted',data)
    }

    renderCount++

    return (
        <>
            <h1>Yotube Form ({renderCount/2})</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate >
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' {...register("username",{
                    required:{
                        value:true,
                        message:"Username is required"
                    }
                })} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register("email",{
                    pattern:{
                        value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Invalid email format",
                    }
                })}/>

                <label htmlFor='password'>password</label>
                <input type='text' id='password' {...register("passwrod",{
                    pattern:{
                        value: /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/ || /[0-9]/,
                        message:'Invalid password'
                    }
                })}/>

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' {...register("channel")}/>

                <button>Submit</button>
                <DevTool control={control} />
            </form>
        </>
    );
};