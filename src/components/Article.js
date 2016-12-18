import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    state = {
        isOpen: false,
        //лучше внести этот стейт в CommentList, иначе компонент выходит очень прегруженным
        commentsShown: false
    }

    render() {
        const { article } = this.props
        return (
            <div>
              <h3 onClick = {this.toggleOpen}>{article.title}</h3>
              {this.getBody()}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    //плохое название метода
    toggleBtnName = () => {
      this.setState({
        commentsShown: !this.state.commentsShown
      })
    }

    getComments() {
      if(this.state.commentsShown)
        //я б эту проверку в CommentList внес
        return <CommentList comments={this.props.article.comments || []}/>
      return null
    }

    changeBtnName() {
      if(this.state.commentsShown)
        return "Hide Comments"
      return "Show Comments"
    }

    getBody() {
        if (!this.state.isOpen) return null
        return (
            <section>
                {this.props.article.text}
                <button onClick={this.toggleBtnName}>{this.changeBtnName()}</button>
                {this.getComments()}
            </section>
        )
    }
}
