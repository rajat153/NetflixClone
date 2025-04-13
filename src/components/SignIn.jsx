import { useState, useRef } from "react"
import Header from "./Header";
import { validate } from "../../utils/validate";
import {auth} from '../../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser} from '../../utils/userSlice';
import { BACKGRND_IMG , USER_DEFAULT_LOGO} from "../../utils/constants";
import Footer from "./Footer";


const SignIn = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    email.current.value = '';
    password.current.value = '';
  }

  const handleClick = () => {
    const msg = validate(email.current.value, password.current.value)
    setErrorMsg(msg)
    if(msg) return;

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value, )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_DEFAULT_LOGO
          }).then(() => {
            const {uid , email, displayName , photoURL} = user
            // Profile updated!
            dispatch(addUser({uid :uid, email, displayName, photoURL}))
          }).catch((error) => {
            console.log(error)
            // An error occurred

          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '-' + errorMessage)
        });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + '-' + errorMessage)
        });
    }
  }

  const submitGuestUserDetails = () =>{
    if (email.current && password.current) {
      email.current.value = "vijay123@gmail.com";
      password.current.value = "Vijay123@";
    }
  }
  return (
    <div>
      <Header/>
      <div>
        <img className ="w-screen h-screen" src={BACKGRND_IMG} alt="backround_img" />
      </div>
      <form action="" onSubmit = {(e)=>e.preventDefault()} className= "absolute w-full md:w-[450px] px-6 md:px-12 py-8 my-24 mx-auto right-0 left-0 top-0 text-white rounded-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
        <h1 className="font-bold text-3xl py-4 mx-2">{isSignInForm  ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignInForm && (<input ref = {name} type = "text" placeholder="Full Name" className="p-4 rounded-sm  m-2 border-1 border-gray-200 bg-midnight  w-full"/>)}
        <input ref = {email} type="text" placeholder="Email or mobile number" className="p-4 rounded-sm m-2 border-1 border-gray-200 bg-midnight  w-full" />
        <input ref = {password} type="password" placeholder="Password" className="p-4 rounded-sm m-2 border-1 border-gray-200 bg-midnight  w-full"  />
        <p className="text-red-500 font-bold text-sm">{errorMsg}</p>
        <button onClick = {handleClick} className="p-4 m-2 bg-red-700 w-full rounded-sm" >{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className="text-center">OR</p>
        <button className="p-4 m-2 w-full text-center  text-white bg-gray-500 rounded-sm">Use a sign-in code</button>
        <u className="m-2 block text-center">Forgot password?</u>
        <input className="absolute h-6 w-6 mx-2 rounded accent-gray-700 bg-black cursor-pointer" type="checkbox" id="remember" name="remember"  />
        <label className = "mx-10" htmlFor="remember">Remember me</label> 
        <p className = "mx-2 py-2 cursor-pointer text-gray-400" onClick={toggleSignInForm}>{isSignInForm ? <>New to Netflix?<span className="text-white">Sign up now.</span></> : `Already registered ? Sign In now`}</p>
        {isSignInForm && <p className = "mx-2 pb-2 cursor-pointer" onClick={submitGuestUserDetails}>Login As Guest</p>}
        <p className="text-gray-400 mx-2 text-sm">This page is protected by Google reCAPTCHA to ensure you are not a bot.</p>
        <a href="" className="underline text-blue-600 mx-2 text-sm">Learn more</a>
      </form>
    </div>
  )
}

export default SignIn