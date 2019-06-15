import React from 'react';
import CommentSection from './CommentSection.js';
import CommentForm from './CommentForm';
import Heart from '../images/heart.svg';
import commentimg from '../images/commentimg.png';
import './PostContainer.css';

// addComment function, takes in comment from comment and user
// takes new comment 

class PostContainer extends React.Component {
    constructor(props) {
    super(props);
    
    this.state = {
        comments: []
    }
}

addComment = (comment) => {
    const newComment = {
        username: 'CoolCarlos',
        id: '4',
        text: comment
    };
    this.setState({
        comments: [...this.state.comments, newComment]
    });
}

    render() {
    return (
                <div className='post-container'>
                    <div className='post-head'>
                        <h4>{this.props.post.username}</h4>
                    </div>
                    <div>
                        <img className='post-images' src={this.props.post.imageUrl} />
                    </div>
                    <div className='images-container'>
                        <img className='postImg'src={Heart} />
                        <img className='postImg'src={commentimg} />
                    </div>
                    <div className='likes'>
                        <p className='likes-line'><strong>{this.props.post.likes} likes</strong></p>
                    </div>
                    {this.props.post.comments.map(comment => {
                        return (
                            <CommentSection comment={comment} key={comment.id}/>
                        )
                    })}
                    <div className='timestamp'>
                        <p>{this.props.post.timestamp}</p>
                    </div>
                    <CommentForm addComment={this.addComment}/>
                </div>
            )
        }
    }


export default PostContainer;

































// import React from 'react';
// import CommentSection from './CommentSection.js';
// import CommentForm from './CommentForm';
// import Heart from '../images/heart.svg';
// import commentimg from '../images/commentimg.png';
// import './PostContainer.css';

// const PostContainer = props => {
//     return (
//         <div className='post-container'>
//             <div className='post-head'>
//                 <h4>{props.post.username}</h4>
//             </div>
//             <div>
//                 <img className='post-images' src={props.post.imageUrl} />
//             </div>
//             <div className='images-container'>
//                 <img className='postImg'src={Heart} />
//                 <img className='postImg'src={commentimg} />
//             </div>
//             <div className='likes'>
//                 <p className='likes-line'><strong>{props.post.likes} likes</strong></p>
//             </div>
//             {props.post.comments.map(comment => {
//                 return (
//                     <CommentSection comment={comment} key={comment.id}/>
//                 )
//             })}
//             <div className='timestamp'>
//                 <p>{props.post.timestamp}</p>
//             </div>
//             <div className='add-comment'>
//                 <CommentForm addComment={this.addComment}/>
//             </div>

//         </div>
//     )
// }

// export default PostContainer;