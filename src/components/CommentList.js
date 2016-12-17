import React, {Component} from 'react'
import Comment from './Comment'

export default function CommentList(props) {

  const { comments } = props

  const commentItems = comments.map(comm => <li key={comm.id}><Comment comment={comm}></Comment></li>)

  return (
      <ul>
        {commentItems}
      </ul>
  )
}
