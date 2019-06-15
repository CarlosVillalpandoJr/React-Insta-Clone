import React from 'react';

const Comment = props => {
    console.log(props);
    return (
        <div className='comment-component'>
            <p><strong>{props.username}</strong> {props.text}</p>
        </div>
    )
}

export default Comment; 