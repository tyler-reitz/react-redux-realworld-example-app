import React from 'react'
import { connect } from 'react-redux'
import agent from '../../agent'

const mapDispatchToProps = dispatch => ({
  onDeleteComment: (payload, commentId) =>
    dispatch({ type: 'DELETE_COMMENT', payload, commentId })
})

const DeleteButton = props => {

  const del = () => {
    const payload = agent.Comments.del(props.slug, props.commentId)
    props.onDeleteComment(payload, props.commentId)
  }

  if (props.show) {
    return (
      <span className="mod-options">
        <i className="ion-trash-a" onClick={del}></i>
      </span>
    )
  }

  return null
}

export default connect(
  () => ({}),
  mapDispatchToProps
)(DeleteButton)
