import { useNavigate } from 'react-router-dom'
import { logOutUser } from '../utils/api'
import React ,{useEffect} from 'react'
import { auth } from '../utils/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser,removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)
 

  const handleSignOut=async()=>{
   const {res,error} = await logOutUser(auth)
   if (error) return error
  }

    useEffect(()=>{ 
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}))
            navigate("/browse")
          } else {
            dispatch(removeUser())
             navigate("/login")
          }
        });

        // unsubscribe when component was unmounted
        return () => unsubscribe()
    },[])

  return (
    <div className='z-10 absolute top-0 left-0 w-full px-2 py-2 flex justify-between bg-gradient-to-b from-black'>
      <div>
        <img src={LOGO} alt='logo' className='w-44'/>
      </div>
      {user && <div>
        <p className='text-white'>{user?.displayName}</p>
        <button  onClick={handleSignOut} className='text-white' >sign out</button>
      </div>}
    </div>
  )
}

export default Header