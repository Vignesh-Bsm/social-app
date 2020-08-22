import React from 'react';
import moment from 'moment';
import {Link } from 'react-router-dom';
 
class PostSummary extends React.Component{
  constructor(props){
    super(props);
    this.state={
      post: this.props.post,
      likeCount:1
    }
  }
  addLike =()=>{
    this.setState({
      likeCount:this.state.likeCount+1
    })
  }
  retstrictName=(name)=>{
       
     let spletter =name.split('')[0];
     return spletter.toUpperCase();

  }
  render(){
       const {post} =this.state

    return(
      <div>
      <li class="collection-item avatar prfcard">
    <i class="material-icons circle red">{this.retstrictName(post.authorLastName)}</i>
      <div className="card z-depth-0 project-summary">
        <div className="card-content cdcont text-darken-3">
    <span className="card-title ">{post.title}</span>
    <p>Posted by {post.authorFirstName} {post.authorLastName}</p>
    <p className="grey-text">{moment(post.createdAt.toDate()).calendar()}</p>
    <p> <i className="material-icons" onClick={this.addLike} >thumb_up</i><span>{this.state.likeCount}</span></p>
    <div className="open">
    <Link to={'/post/'+post.id} key={post.id}>
      <i class="material-icons">open_in_new</i>
      </Link>
      </div>
        </div>
      </div>
      </li>
      <br/>
      </div>
    )
  }


}

export default PostSummary
