import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = () => {
  
  return <div>
    <ProfileInfo />
    <div><MyPostsContainer />
    </div>
  </div>
}
export default Profile;