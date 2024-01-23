import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

export async function RegisterUser(auth, email, password) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return { user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorMessage };
  }
}

export async function loginUser(auth, email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return { user };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorMessage };
  }
}

export async function logOutUser(auth) {
  try {
    const res = await signOut(auth);
    return { res };
  } catch (error) {
    return { error };
  }
}

export async function updateUser(user) {
  try {
    const res = await updateProfile(user, {
      displayName: 'Jane Q. User',
      photoURL: 'https://example.com/jane-q-user/profile.jpg',
    });
    return null;
  } catch (error) {
    return { error };
  }
}
