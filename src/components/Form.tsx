import { FC, useState } from "react";
import { PassThrough } from "stream";

interface FormProps {
    title:string;
    handleClick: (email:string, pass:string)=>void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email ,setEmail] = useState('')
    const [pass, setPass] = useState('')
    return ( 
        <>
        <input
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="@"
        />

        <input
        type='password'
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
        placeholder="Password"
        />
        <button 
        onClick={()=>handleClick(email,pass)}
        >
            {title}
        </button>
        </>
     );
}
 
export default Form;