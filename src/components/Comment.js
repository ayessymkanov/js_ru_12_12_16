import React, {Component} from 'react'

export default class Comment extends Component {
  render() {
    const {comment} = this.props
    console.log(this.props.comment)
    return (
      <div>
        <h6>{comment.comment.user}</h6>
        <p>{comment.comment.text}</p>
      </div>
    )
  }
}
