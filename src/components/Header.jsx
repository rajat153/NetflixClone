import { auth } from "../../utils/firebase"
import { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../../utils/userSlice';
import { LOGO, USER_DEFAULT_LOGO } from "../../utils/constants";

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
  
  const handleClick  = () => {
    signOut(auth).then(() => {
        navigate('/')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      }); 
  }
  return (
    <div className='absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img className = 'w-44' src={LOGO} alt="netflix logo" />
        { user && <div className="p-2">
            <p>{user?.displayName}</p>
         <img className="w-12" src= {USER_DEFAULT_LOGO} alt="" />
         <button onClick={handleClick}>SignOut</button>
        </div>}
    </div>
  )
}

export default Header