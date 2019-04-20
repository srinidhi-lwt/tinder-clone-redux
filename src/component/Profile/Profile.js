import React from 'react'
import { connect } from 'react-redux'
import { likePerson } from '../../redux/action';
import { DislikePerson } from '../../redux/action';
import { getUserThunk } from '../../redux/action'

class Profile extends React.Component {
  likeThisPerson = () => {
    this.props.dispatch(likePerson(this.props.fullName))
    this.props.dispatch(getUserThunk())

  }

  DislikeThisPerson = () => {
    this.props.dispatch(DislikePerson(this.props.fullName))
    this.props.dispatch(getUserThunk())
  }

  render() {
    return (
      <div>
        <div><img src = { this.props.pictureUrl }></img></div>
        <div>{ this.props.gender }</div>
        <div>{ this.props.fullName }</div>
        <div>
          <div onClick= { this.likeThisPerson }>Like</div>
          <div onClick= { this.DislikeThisPerson }>Dislike</div>
        </div>
      </div>
    )
  }
}

export default connect()(Profile);