import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import  {signUp} from '../../store/actions/authActions'

class SignUp extends React.Component {
   state={
    email:'',
    password:'',
    firstName:'',
    lastName:'',
    about:''

   }
  handleChange=(e)=>{
     this.setState({
      [e.target.id]:e.target.value
     })
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      this.props.signUp(this.state);
  }
    render(){
        const { auth,redirect,authError } = this.props;
       if(auth) return  <Redirect to="/"/>
       if(redirect) return <Redirect to="/signin"/>
       
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                     <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input type="email" id="email" onChange={this.handleChange}/>

                     </div>
                     <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input type="password" id="password" onChange={this.handleChange}/>

                     </div>
                     <div className="input-field">
                         <label htmlFor="firstName">First Name</label>
                         <input type="text" id="firstName" onChange={this.handleChange}/>

                     </div>
                     <div className="input-field">
                         <label htmlFor="lastName">Last Name</label>
                         <input type="text" id="lastName" onChange={this.handleChange}/>

                     </div>
                     <div className="input-field">
                         <label htmlFor="password">About </label>
                         <input type="text" id="about" onChange={this.handleChange}/>

                     </div>
                     <div className="input-field">
                         <button className="btn blue lighten-1 z-depth-0">
                         SignUp
                         </button>
                         <div className="red-text center">
                           {authError ? <p>{authError}</p>: null}
                         </div>
                     </div>
                </form>
            </div>
        )
    }


}
const mapStateToProps=(state)=>{
    return{
        auth:state.auth.uid,
        redirect:state.auth.redirect,
        authError: state.auth.authError
    }
}

const mapDispatchToProps=(dispatch)=>{
     
    return{
        signUp: (userRegister)=> dispatch(signUp(userRegister))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (SignUp)