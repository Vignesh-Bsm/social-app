import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut, getProfile} from '../../store/actions/authActions';



const SignedInLinks = (props) => {
 const{ users} = props;
 var auth = props.auth;
  var profile= users.find(ele=>ele.id == auth)
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>Write Post</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
  <li><NavLink to='/' className="btn btn-floating pink lighten-1">{profile.lastName}</NavLink></li>
      </ul>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return {
   auth: state.auth.uid,
   // lastName:state.firestore.ordered.users?state.firestore.ordered.users[0].lastName:null,
   users:state.firestore.ordered.users
   
  }
}
const mapDispatchToProps =(dispatch)=>{

  return{
    signOut: ()=> dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (SignedInLinks)
