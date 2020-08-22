import React, { Component } from 'react'
import PostList from '../posts/PostList'
import UserProfile from './UserProfile'
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import { Redirect } from 'react-router-dom';
import firebase from "../../config/fbConfig";
import Loader from 'react-loaders'



class Dashboard extends Component {
  state={
    loading:true
  }

   
  componentDidMount(){
    setTimeout(()=>{this.setState({loading:false})},2000)
    
  }

  render() {
    var user2 = firebase.auth().currentUser;
    // const postItem = this.props.postsList
    
    const {auth,  postsList} = this.props;
    let loader = (<div class="preloader-wrapper loadernw  active">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>)
    if(!auth) return <Redirect to='/signin'/>
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
          {this.state.loading?loader :<PostList posts={postsList} />}
          </div>
          <div className="col s12 m5 offset-m1">
            <UserProfile />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps= (state)=>{
 
  return {
    postsList: state.firestore.ordered.posts,
    auth: state.auth.uid
    
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'posts', orderBy: ['createdAt','desc']}
  ])

)(Dashboard)
