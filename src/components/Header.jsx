import { auth } from "../../utils/firebase"
import { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';
import { LOGO, USER_DEFAULT_LOGO } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";
import { SUPPORTED_LNG } from "../../utils/constants";
import { changLang } from "../../utils/configSlice";

const Header = () => {

  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid : uid, email : email , displayName :displayName, photoURL:photoURL}))
        navigate('/browse')
      } else {
        dispatch(removeUser())
        navigate('/')
      }
    });
    return () => unsubscribe();
  }, [])


  const user = useSelector(store => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  
  const handleClick  = () => {
    signOut(auth).then(() => {
        navigate('/')
        // Sign-out successful.
      }).catch((error) => {
        console.log(error)
        // An error happened.
      }); 
  }

  const handleGPTSeach = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLngChng = (e) =>{
    dispatch(changLang(e.target.value))
  }

  return (
    <div className='absolute flex flex-col justify-center items-center md:flex-row md:justify-between w-screen p-2 bg-gradient-to-b from-black z-10'>
        <img className = 'w-44' src={LOGO} alt="netflix logo" /> 
        { user && <div className=" flex">
          <p className="text-white mt-[15px]">Welcome {user?.displayName}</p>
         {showGptSearch && <select className="pr-1 bg-gray-900 text-white ml-1" onChange={handleLngChng}>
          {SUPPORTED_LNG.map((item)=>{
            return <option key = {item.identifier} value={item.identifier}>{item.name}</option>
          })}
         </select>}
         {/* <p>{user?.displayName}</p> */}
         <button onClick={handleGPTSeach} className="py-2 px-2 mx-1 bg-purple-500 text-white rounded-lg cursor-pointer">{showGptSearch ? 'HomePage' : 'GPT Search' }</button>
         <img className="hidden sm:inline-block w-12" src= {USER_DEFAULT_LOGO} alt="" />
         <button className="text-white px-1" onClick={handleClick}>SignOut</button>
        </div>}
    </div>
  )
}

export default Header