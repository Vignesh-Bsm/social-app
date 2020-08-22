import firebase from "../../config/fbConfig";

export const signIn = (userInput,history)=>{

 return (dispatch,getState, {getFirebase})=>{
    

     firebase.auth().signInWithEmailAndPassword(
         userInput.email,
         userInput.password   
     ).then((res)=>{
         console.log(res.user.uid,"VICKYY")
       
         dispatch({type: 'LOGIN_SUCCESS',uid:`${res.user.uid}`});
         

     }).catch((err)=>{
         
         dispatch({type: 'LOGIN_ERROR',err});
     })
 }

}

export const signOut = ()=> {

    return (dispatch,getState)=>{
        
        firebase.auth().signOut().then((res)=>{
            console.log(res,'signout')
            dispatch({type:'SIGNOUT_SUCCESS'});
        });
    }
}

export const signUp =(userRegister)=>{

    return(dispatch, getState,{getFirebase,getFirestore})=>{
        
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            userRegister.email,
            userRegister.password
        ).then((res)=>{
           return firestore.collection('users').doc(res.user.uid).set({
               firstName: userRegister.firstName,
               lastName: userRegister.lastName,
               initials: userRegister.firstName[0]+userRegister.lastName[0],
               email:userRegister.email,
               about:userRegister.about

           })
        }).then(()=>{
            
            dispatch({type: 'SIGNUP_SUCCESS'})
           
        }).catch(err=>{
            dispatch({type: 'SIGNUP_ERROR',err})
        })
    }
}
 