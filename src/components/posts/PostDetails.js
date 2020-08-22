import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'; 
import moment from 'moment'

const PostDetails = (props) => {
  const { post,auth } = props;
  if(!auth) return <Redirect to="signin"/>

  if(post){
    return(
    <div className="container section project-details">
      <div className="card salmon z-depth-0">
        <div className="card-content">
  <span className="card-title">{post.title}</span>
  <p>{post.content}</p>
        </div>
        <div className="card-action grey  black-text">
  <div>Posed by {post.authorFirstName}</div>
          <div>{moment(post.createdAt.toDate()).calendar()}</div>
        </div>
      </div>
    </div>
 )
  }
  else{
    return (
      <div className="container center">
         <p>Loading posts...</p>
      </div>
    )

  }
}
 
const mapStateToProps =(state,uniProps) =>{
  const id =  uniProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts? posts[id]: null;
  return {
     post:post,
     auth:state.auth.uid
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      {collection: 'posts'}])
) (PostDetails)
