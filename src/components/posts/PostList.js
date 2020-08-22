import React from 'react'
import PostSummary from './PostSummary';
import {Link } from 'react-router-dom';

const PostList = ({posts}) => {

  return (
    <div className="project-list section">  
    <ul className="collection cardColl">
      {posts && posts.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i).map((post)=>{
         return(
          //  <Link to={'/post/'+post.id} key={post.id}>
           <PostSummary post={post} />
          //  </Link>
         )
      })}
      </ul>
    </div>
  )
}

export default PostList
