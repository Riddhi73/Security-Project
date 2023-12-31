import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link,useNavigation } from "react-router-dom";
import g from "../../img/google.png";
import logbg from "../../img/logimg.webp";
import '../globalcss/style.css'
import {auth,provider} from './config.js'
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {

   const [googlelog, setGooglelog]=useState('');
   const [user, setUser]=useState('');
  
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');

  
   

    const handleEmailchange = e => {
         setemail(e.target.value);
        // console.log(email);
        
    }
    const handlePassChange = e => {
        setpass(e.target.value);
        // console.log(pass);
       
    }

    const handleLogin = e => {
      console.log(email);
       console.log(pass);
     
        signInWithEmailAndPassword(auth,email,pass)
        .then((user)=>{
          setUser(user.user)
        }).catch((error)=>{
          console.log(error)
        })

        e.preventDefault();

       
    }
    const handleGoogleLogin = (e)=> {
       
      signInWithPopup(auth,provider).then((data)=>{
        setGooglelog(data.user.email);
        localStorage.setItem('email',data.user.email)
      });
      e.preventDefault();
     }

     useEffect(()=>{
     setGooglelog(localStorage.getItem('email'));
     })

     const googleLogout=()=>{
      localStorage.clear();
      window.location.reload();
     }
  return (
     
    <>
     {
        googlelog?<h2 className=" my-4 pt-5 text-center "><span className="text-danger">Congratulation</span> Google lognin is Done !!!!</h2>:<h2 className="my-4 text-center pt-5"></h2>
     }
     {
      user&&<><h2> <span className="text-danger">Congratulation!! </span> on your brilliant success </h2> <button className="btn btn-info mt-3" ><a className="text-decoration-none text-light" href="/home">Go Home</a></button> </>
     }
    <div className="text-center d-flex ">
      <div className="d-flex shadow-lg mx-auto my-5 marginTopBot">
        <div className="w-50 d-flex mx-4">
          <img src={logbg} alt="login img" className="my-auto" width="100%" />
        </div> 
        <div className="w-50">
          <Container className="border-start p-5">
            <h4 className="pt-5 pb-3 text-theme-dark border-theme mx-auto">
              Log-In
            </h4>
            <div className="my-5 ">
              <form>
                <input
                  type="email"
                  className="form-control mx-auto"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailchange}
                />
                <br />
                <input
                  type="password"
                  className="form-control mx-auto"
                  placeholder="Password"
                  value={pass}
                  onChange={handlePassChange}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-info px-5 py-2 text-light"
                  value="Login"
                  onClick={handleLogin}
                >Log in</button>
              </form>
              <p className="my-4 ">
                New to SecureHub ?
                <Link to="/signup" className="ms-2">
                  Sign Up
                </Link>
              </p>
              <button onClick={handleGoogleLogin} className="btn-light my-2 px-5 py-2 btn shadow mb-5">
                <img
                  src={g}
                  className="pe-2"
                  width="28px"
                  height="20px"
                  alt="Google icon"
                />
                Continue with Google
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
    {
        googlelog?<button className="btn btn-primary px-4 py-2 my-5 rounded" onClick={googleLogout}>Google Log out</button>:<h2 className="my-4 text-center pt-5"></h2>
     }
    </>
  );
};

export default Login;
