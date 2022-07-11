import React from 'react'
import { createUserWithEmailAndPassword,getAuth ,GoogleAuthProvider,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import app from "../firebase"
import Card from 'react-bootstrap/Card';
import { FaGoogle } from "react-icons/fa";

import { useState } from 'react';
const auth=getAuth(app)
const googleprovider=new GoogleAuthProvider()
const Signup=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password).then(value=>alert('added'))
    }
const signinwithgoogle=()=>{
    signInWithPopup(auth,googleprovider)
}

    return(
<>        
<Card className="bg-dark text-white">
      <Card.Img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg" alt="Card image"
      style={{opacity:'0.3'}} />
      <Card.ImgOverlay>
        <Card.Text><Card style={{ width: '18rem', marginLeft:'480px',marginTop:'130px',height:'23rem' }}>
      <Card.Body>
        <Card.Text>
        <Card.Title style={{color:'maroon'}}> Signin with Google account</Card.Title>
        <button onClick={signinwithgoogle} style={{marginLeft:'25px',marginTop:'150px',height:'40px',width:'200px'}}> 
        <FaGoogle style={{color:'orange',marginRight:'10px'}} />sign in with google</button>
        </Card.Text>
      </Card.Body>
    </Card>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    
            </>
    )
}
export default Signup