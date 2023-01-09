import {initializeApp } from 'firebase/app'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../config/firebase';
const app=initializeApp(firebaseConfig)
const auth=getAuth(app);


export const createrUser=(email,password,action,erroraction)=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(async (userCredential)=>{
        const user=userCredential.user;
        await AsyncStorage.setItem('token',user.accessToken);
        action()
    }).catch(error=>{
        erroraction()
    })
}

export const singInUser=(email,password,action,erroraction)=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(async (userCredential)=>{
        const user=userCredential.user;
        await AsyncStorage.setItem('token',user.accessToken);
        action()
    }).catch(error=>{
        erroraction()
    })
}