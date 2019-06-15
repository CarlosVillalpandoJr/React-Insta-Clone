import React from 'react';
import Comment from './Comment';


 const CommentSection = props => {
     return (
         <div className='comments'>
            {<Comment username={props.comment.username} text={props.comment.text} /> }
        </div>
     )
 }

 export default CommentSection;

























//  const CommentSection = props => {
//     console.log(props);
//      return (
//          <div className='comments'>
//             {<Comment username={props.comment.username} text={props.comment.text} /> }
//         </div>
//      )
//  }