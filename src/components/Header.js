import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import auth from '../utils/firebaseConfig';
import { logOutUser } from '../utils/api';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { isGPTSearch } from '../utils/GPTSlice';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const GPTSearch = useSelector((store) => store.GPTSearch.GPTSearch);

  const handleSignOut = async () => {
    const { error } = await logOutUser(auth);
    if (error) return error;
    return null;
  };

  const handleClickButton = () => {
    dispatch(isGPTSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { uid, email, displayName } = authUser;
        dispatch(addUser({ uid, email, displayName }));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/login');
      }
    });
    // unsubscribe when component was unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="z-10 absolute top-0 left-0 w-full px-2 py-2 flex justify-between bg-gradient-to-b from-black">
      <div>
        <img src={LOGO} alt="logo" className="w-44" />
      </div>
      {user && (
        <div className="flex gap-2 text-white items-center">
          <button
            type="button"
            className="border rounded-md p-2"
            onClick={handleClickButton}
          >
            {GPTSearch ? 'Home Page' : 'GPT Search'}
          </button>
          <button
            type="button"
            onClick={handleSignOut}
            className="border rounded-md p-2"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
