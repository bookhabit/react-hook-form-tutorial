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
    const {register,control,handleSubmit,formState} = form
    const {errors} = formState

    const onSubmit = (data:FormValues)=>{
        console.log('Form submitted',data)
    }

    renderCount++

    return (
        <>
            <h1>Yotube Form ({renderCount/2})</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate >
                <div className="form-control">
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' {...register("username",{
                        required:{
                            value:true,
                            message:"Username is required"
                        },
                        pattern:{
                            value:/^[^\d]+$/,
                            message: "숫자를 포함하지 마시오",
                        }
                    })} />
                    <p className="err">{errors.username?.message}</p>
                </div>
                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <input type='email' id='email' {...register("email",{
                        required:{
                            value:true,
                            message:"E-mail is required"
                        },
                        pattern:{
                            value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: "Invalid email format",
                        }
                    })}/>
                    <p className="err">{errors.email?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' {...register("passwrod",{
                        required:{
                            value:true,
                            message:"Password is required"
                        },
                        pattern:{
                            value: /[{}[\]/?.,;:|)*~`!^\-_+<>@#$%&\\=('"]/ || /[0-9]/,
                            message:'Invalid password'
                        }
                    })}/>
                    <p className="err">{errors.passwrod?.message}</p>
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <input type='text' id='channel' {...register("channel",{
                        required:{
                            value:true,
                            message:"Channel is required"
                        }
                    })}/>
                    <p className="err">{errors.channel?.message}</p>
                </div>
                <button>Submit</button>
                <DevTool control={control} />
            </form>
        </>
    );
};