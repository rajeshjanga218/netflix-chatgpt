import { useNavigate } from 'react-router-dom'
import { logOutUser } from '../utils/api'
import React ,{useEffect} from 'react'
import { auth } from '../utils/firebaseConfig'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser,removeUser } from '../utils/userSlice'



function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)
  console.log(user)

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
    <div className='w-full px-2 py-2 flex justify-between bg-gradient-to-b from-black'>
      <div>
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo' className='w-44'/>
      </div>
      {user && <div>
        <p className='text-white'>{user?.displayName}</p>
        <button  onClick={handleSignOut} className='text-white' >sign out</button>
      </div>}
    </div>
  )
}

export default Header