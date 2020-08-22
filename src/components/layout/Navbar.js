import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getProfile} from '../../store/actions/authActions'

const Navbar = (props) => {
 

  const { auth,users } = props;
  
  const links = auth? <SignedInLinks name={users} auth={auth} />:<SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Social App</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state)=>{
   return {
    auth: state.auth.uid,
    users:state.firestore.ordered.users
    
   }
}
export default compose (connect(mapStateToProps),
firestoreConnect([
  {collection:'users'}
])

) (Navbar);
