import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
  <div>
    <div>
      {<img src="https://cdn.shazoo.ru/c800x360/156640_4VzAUHtq4d_witcher3.jpg"></img>}
    </div>
    <div className={classes.descriptionBlock}>
      ava + description
      </div>
  </div>
  )
}
export default ProfileInfo;