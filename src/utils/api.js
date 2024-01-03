import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export async function RegisterUser(auth,email,password){
    try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
    return {user}
    }catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    return {errorMessage}
    }
}

export async function loginUser(auth,email,password){
    try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return {user}
    }catch(error){
    const errorCode = error.code;
    const errorMessage = error.message;
    return {errorMessage}
    }
}
