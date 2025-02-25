import { useState } from "react"
import Header from "./Header"

const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img className ="h-screen" src="https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg" alt="" />
      </div>
      <form action="" className= "w-1/2 absolute p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg" style={{backgroundColor: 'rgba(0, 0, 0, 0.85)' }}>
        <h1 className="font-bold text-3xl py-4">{isSignInForm  ? 'Sign In' : 'Sign Up'}</h1>
        { !isSignInForm && (<input type = "text" placeholder="Full Name" className="p-2 m-2 border-1 border-gray-200 w-full"/>)}
        <input type="text" placeholder="Email or mobile number" className="p-2 m-2 border-1 border-gray-200  w-full" />
        <input type="password" placeholder="Password" className="p-2 m-2 border-1 border-gray-200 w-full"  />
        <button className="p-4 my-4 bg-red-700 w-full rounded-sm" >{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className="text-center">OR</p>
        <button className="p-4 m-2 w-full text-center  text-white bg-gray-500 rounded-sm">Use a sign-in code</button>
        <p className = "py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ?   <>New to Netflix? <span>Sign up now.</span></> : `Already registered ? Sign In now`}</p>
      </form>
    </div>
  )
}

export default SignIn