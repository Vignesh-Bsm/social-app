import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class  UserProfile extends React.Component{

  constructor(props){
    super(props);
    
     this.about="Iam a React Developer"
     this.state={
       users:props.userData,
       id:props.auth
     }
  
  }

 getUserName=()=>{
  
      const{auth,userData} =this.props;
      let profile=userData.find((user)=>user.id === auth)
      return profile
     
  }
 

  render(){

    const profile= this.getUserName();
    
    return(
  <div class="col s10 offset-s1">
         <div class="card profileCard darken-1">
             <div class="card-content center-align white-text">
    <div class="card-title">Hi this is {profile.firstName}</div>
                <div className="btn namebtn btn-floating  lighten-1">{profile.lastName}</div>
            <p class="truncate">Email : {profile.email}</p>
    <p className="truncate profAlign"><b>About..</b> <br></br>{profile.about}</p>
             </div>

             {/* <div class="card-action center-align">
                 <a href="#">This is a link</a>
                 <a href="#">This is a link</a>
             </div> */}
         </div>
     </div>

    )
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.auth.uid,
    userData:state.firestore.ordered.users,
    userName:state.firestore.ordered.users?state.firestore.ordered.users[0].firstName:null,
   
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
     {collection:'users'}
  ])
) (UserProfile)
