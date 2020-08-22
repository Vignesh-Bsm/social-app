export const createPost =(post,fName,lName)=>{
  
    return(dispatch, getState, {getFirestore})=>{
         getState()
        const firestore = getFirestore();
        firestore.collection('posts').add({
            ...post,
            authorFirstName:fName,
            authorLastName:lName,
            createdAt: new Date()

        }).then(()=>{
            
            dispatch({type: 'CREATE_POST',post:post});
           
        }).catch((err)=>{
            dispatch({type:'CREATE_POST_ERROR',err})
        })
    }
}