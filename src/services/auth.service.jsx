import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";
import {auth,googleProvider} from "../config/firebase.config.jsx";
import { doc, setDoc,getDoc} from "firebase/firestore";
import {db} from "../config/firebase.config.jsx";
export const registerWithEmail=async (email,password,fullName)=>{
    try{
        console.log("fullName: ");
        console.log(fullName);
        const userCredential=await createUserWithEmailAndPassword(auth,email,password);
        // const user=userCredential.user;
        // setDoc(doc(db,"users",))
        console.log("register a user: ");
        console.log(userCredential.user);
        const user=userCredential.user;
        console.log("userId");
        console.log(user.uid);
        const document=doc(db,"users",user.uid);
        await setDoc(document,{
            name:fullName,
            userId:user.uid
        });
        console.log("isUserRegister");
        return userCredential.user;
    }catch(err){
        throw err;
    }
}
export const signInWithEmail=async (email,password)=>{
    try{
        const userCredential=await signInWithEmailAndPassword(auth,email,password);
        console.log("userCredentail: ");
        const userRef=doc(db,"users",userCredential.user.uid);
        const userSnap=await getDoc(userRef);
        if(userSnap.exists()){
            console.log("userSnap: ");
            console.log(userSnap.data());
        }
        console.log(userCredential.user);
        return userSnap.data();
    }catch(err){
        throw err;
    }
}
export const signInWithGoogle=async ()=>{
    try{
        const result=await signInWithPopup(auth,googleProvider);
        console.log('result received afterm google', result.user);
        return result.user;
    }catch(err){
        throw err;
    }
}
export const logOut=async ()=>{
    try{
        await signOut(auth);
        
        console.log("logOut");
    }catch(err){
        throw err;
    }
}
export const observeAuthState=(callback)=>{
    try{
    return onAuthStateChanged(auth,callback)
    }catch(err){
        throw err;
    }
}