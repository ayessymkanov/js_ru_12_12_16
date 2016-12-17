import React, {Component} from 'react'

export default class Comment extends Component {

  render() {
    const {comment} = this.props

    return (
      <div>
        <h6>{comment.user}</h6>
        <p>{comment.text}</p>
      </div>
    )
  }
}
