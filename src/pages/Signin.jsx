import React ,{useState} from 'react'
import { signInWithEmailAndPassword,getAuth } from "firebase/auth";
import app from "../firebase"
const auth=getAuth(app)

const Signin=()=>{
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const signin=()=>{
    signInWithEmailAndPassword(auth,email,password).then(value=>alert('signedin'))
    }
    return(
    <div className='App'>
</div>
    );

}
export default Signin;