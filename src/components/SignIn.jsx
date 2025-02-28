import { useState, useRef } from "react"
import Header from "./Header";
import { validate } from "../../utils/validate";
import {auth} from '../../utils/firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser} from '../../utils/userSlice';
import { BACKGRND_IMG , USER_DEFAULT_LOGO} from "../../utils/constants";


const SignIn = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("");

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleClick = () => {
    const msg = validate(email.current.value, password.current.value, name.current.value)
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
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img className ="w-screen h-screen object-fill" src={BACKGRND_IMG} alt="backround_img" />
      </div>
      <form action="" onSubmit = {(e)=>e.preventDefault()} className= "w-96 absolute px-12 py-32 my-36 mx-auto right-0 left-0 text-white rounded-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
        <h1 className="font-bold text-3xl py-4">{isSignInForm  ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignInForm && (<input ref = {name} type = "text" placeholder="Full Name" className="p-2 m-2 border-1 border-gray-200 w-full"/>)}
        <input ref = {email} type="text" placeholder="Email or mobile number" className="p-2 m-2 border-1 border-gray-200  w-full" />
        <input ref = {password} type="password" placeholder="Password" className="p-2 m-2 border-1 border-gray-200 w-full"  />
        <p className="text-red-500 font-bold text-sm">{errorMsg}</p>
        <button onClick = {handleClick} className="p-4 my-4 bg-red-700 w-full rounded-sm" >{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className="text-center">OR</p>
        <button className="p-4 m-2 w-full text-center  text-white bg-gray-500 rounded-sm">Use a sign-in code</button>
        <p className = "py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?   <>New to Netflix? <span>Sign up now.</span></> : `Already registered ? Sign In now`}</p>
      </form>
    </div>
  )
}

export default SignIn