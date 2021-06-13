import React from 'react';
import classes from './Friends.module.css';


const Friends = (props) => {
    return <div><img className={classes.avatar} alt='ava' src={props.avatar} />{props.name}
    </div>
}
export default Friends;