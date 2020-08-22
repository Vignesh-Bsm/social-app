const initState = {
    authError: null,
    uid:null,
    redirect:false
}

const authReducer =(state = initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login Failed' 
            }
        case 'LOGIN_SUCCESS':
            console.log('login success',action.uid);
            return{
                ...state,
                authError: null,
                uid:action.uid,
                


            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return{
                ...state,
                uid:null
            };
        case 'SIGNUP_SUCCESS':
            console.log("SIGNUP_SUCCESS")
            return{
                ...state,
                authError: null,
                redirect:true
            }
        case 'SIGNUP_ERROR':
            console.log("Signup error")
            return {
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
    
}

export default authReducer