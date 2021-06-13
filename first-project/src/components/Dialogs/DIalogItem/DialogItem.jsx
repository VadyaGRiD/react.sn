import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={classes.dialog + ' ' + classes.active}>
        <div><img className={classes.avatar} alt='ava' src={props.avatar} />
            <NavLink to={path}>{props.name}</NavLink></div>
    </div>
}

export default DialogItem;