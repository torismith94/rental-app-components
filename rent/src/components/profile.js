// user profile page to edit / public profile 
import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div className="Profile">
            My Profile
            <img class="profile-img" src="img.jpg" alt="username">
            <h1>My Name</h1>
      </div>
    );
  }
}

export default Profile;
