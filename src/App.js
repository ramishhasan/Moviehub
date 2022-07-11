import { createUserWithEmailAndPassword,getAuth,onAuthStateChanged,signOut } from "firebase/auth";
import {getDatabase,set,ref} from "firebase/database"
import React ,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';
import Movie from './Movie'
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import app from './firebase'
import "./App.css";
const db=getDatabase(app)
const auth=getAuth(app);

function App() {
  const [user,setuser]=useState(null)
useEffect(()=>{onAuthStateChanged(auth,(user)=>{
if(user)
{
setuser(user)
}
else{
  setuser(null)
}
})},[])
if(user===null)
{
  
  return (
    <div className="App">
      <Signup/>
      <Signin />
    </div>
  );
}
  
  return (
    <div className="App">
 <Navbar bg="dark" variant="light">
    <Container>
    <Nav className="me-auto">

      <Nav.Link><Button variant="danger"  onClick={()=>{signOut(auth)}}>Signout</Button>

      <Nav.Link style={{color:'aqua',fontSize:'20px'}}>Login as-{user.email}</Nav.Link>
      <Nav.Link>      
</Nav.Link>
</Nav.Link>
    </Nav>

    </Container>
  </Navbar>
  <Movie/>

    </div>
  );
}

export default App;
