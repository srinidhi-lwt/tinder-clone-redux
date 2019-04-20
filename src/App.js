import React, { Component } from 'react';
import './App.css';
import Profile from './component/Profile/Profile';
import { getUserThunk } from './redux/action'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getUserThunk())
  }

  render() {
    const userData = this.props.users && this.props.users[0]
    const gender = userData ? userData.gender : ''
    const fullName = userData ? `${userData.name.title} ${userData.name.first} ${userData.name.last} ` : ''
    const pictureUrl = userData ? userData.picture.large :  ''

    return (
      <div className="App">
        <div>
          { this.props.loading && <h3>Loading...</h3> }
          { this.props.error && <h3 style={{color: "red"} }>Unknown error!</h3>}
          { !this.props.loading && this.props.users ? <Profile gender= {gender} fullName={fullName} pictureUrl = {pictureUrl}/> : '' }
        </div>
        <div className="user-data">
          <div>Likes</div>
          <div>Dislikes</div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
    return {
      users: store.profileReducer.users,
      loading: store.profileReducer.loading,
      error: store.profileReducer.error,
      usersLiked: store.LikeReducer,
      usersDisliked: store.DislikeReducer
    }
}

export default connect(mapStoreToProps)(App);
