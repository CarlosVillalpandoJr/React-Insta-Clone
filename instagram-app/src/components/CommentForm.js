import React from 'react';


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        }
    }

    handleChanges = event => {
        this.setState ({ [event.target.name]: event.target.value })
    }

    submitComment = event => {
        console.log('click');
        event.preventDefault();
        this.props.addComment(this.state.comment)
        this.setState({ comment: '' });
    }

    render() {
    return (
        <div>
            <form onSubmit={this.submitComment}>
                <input 
                    className='comment-input' 
                    type='text' 
                    value={this.state.comment} 
                    name='comment'
                    onChange={this.handleChanges}
                />
            </form>
        </div>
    )
  }
}

export default CommentForm;