import React from "react";
import { connect } from 'react-redux';
import { signIn} from '../../store/actions/authActions';
import { Redirect } from "react-router-dom";

class SignIn extends React.Component {
   state={
    email:'',
    password:''
   }
  handleChange=(e)=>{
     this.setState({
      [e.target.id]:e.target.value
     })
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      this.props.signIn(this.state)
  } 
    render(){
   
       const { authError,auth } = this.props;
       if(auth) return  <Redirect to="/"/>
        return(
            <div className="container singIn">
               <div className="row">
      
      <div className="col s6 ">
      <div class="gallery-curve-wrapper">
   
     <h1 >Social App</h1>
    
      </div>
      </div>
      <div className="col s6">
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
                         <button className="btn blcl lighten-2 z-depth-0">  
                         Login
                         </button>
                         <div className="red-text center">
                           {authError ? <p>{authError}</p>: null}
                         </div>
                     </div>
                </form>
      </div>
    </div>
                
            </div>
        )
    }


}

const mapStateToProps = (state) =>{
    return {
        authError: state.auth.authError,
        auth: state.auth.uid
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        signIn:(userInp)=> dispatch(signIn(userInp))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (SignIn)