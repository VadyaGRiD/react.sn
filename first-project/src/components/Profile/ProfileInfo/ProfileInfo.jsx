import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
if(!props.profile) {
  return <Preloader />
}

  return (
  <div>
    <div>
      {<img src="https://cdn.shazoo.ru/c800x360/156640_4VzAUHtq4d_witcher3.jpg"></img>}
    </div>
    <div className={classes.descriptionBlock}>
      <img src={props.profile.photos.large} />
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
  </div>
  )
}
export default ProfileInfo;