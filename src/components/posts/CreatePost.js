import React from "react";
import { connect } from 'react-redux';
import { createPost} from '../../store/actions/postActions';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from "react-redux-firebase";

class CreatePost extends React.Component {
   state={
    title:'',
    content:''
   }
  handleChange=(e)=>{
     this.setState({
      [e.target.id]:e.target.value
     })
  }
  handleSubmit=(e)=>{
      e.preventDefault();
      const{auth,users}=this.props;
         
        let profile = users.find((user)=>user.id ===auth)
          const {firstName,lastName } = profile;
    this.props.createPost(this.state,firstName,lastName)
    this.props.history.push('/'); 
  }
    render(){
     const{ auth}= this.props;
     if(!auth) return <Redirect to="signin"/>

        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create Post</h5>
                     <div className="input-field">
                         <label htmlFor="title">Title</label>
                         <input type="text" id="title" onChange={this.handleChange}/>

                     </div>
                     <div className="input-field">
                         <label htmlFor="content">Content</label>
                        <textarea  id="content"  className="materialize-textarea" onChange={this.handleChange} />

                     </div>
                     <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">
                         Create
                         </button>
                     </div>
                </form>
            </div>
        )
    }


}

const mapStateToProps =(state)=>{
    return{
     auth: state.auth.uid,
     users:state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        createPost: (post,fName,lName) => dispatch(createPost(post,fName,lName))
    }

}

export default compose(connect(mapStateToProps, mapDispatchToProps),firestoreConnect([
    {collection:'users'}
])) (CreatePost);