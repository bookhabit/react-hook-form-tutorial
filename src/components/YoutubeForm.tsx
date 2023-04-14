import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"
import { useState } from "react";

let renderCount = 0

export const YoutubeForm = () => {
    const form = useForm();
    const {register,control} = form
    // 기존 방식
    const [inputs, setInputs] = useState({
        username2: '',
        email2: '',
        channel2:''
      });
    
      const { username2, email2,channel2 } = inputs; // 비구조화 할당을 통해 값 추출
    
      const onChange = (e:any) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
      };

    renderCount++

    return (
        <>
            <h1>Yotube Form ({renderCount/2})</h1>
            <form>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' {...register("username")} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' {...register("email")}/>

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' {...register("channel")}/>

                <label htmlFor='username2'>Username2</label>
                <input type='text' name='username2' onChange={onChange} value={username2} />

                <label htmlFor='email2'>E-mail</label>
                <input type='email' name='email2' onChange={onChange} value={email2} />

                <label htmlFor='channel2'>Channel2</label>
                <input type='text' name='channel2' onChange={onChange} value={channel2} />

                <button>Submit</button>
                <DevTool control={control} />
            </form>
        </>
    );
};