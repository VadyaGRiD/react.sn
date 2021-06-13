import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import classes from './Navbar.module.css';



const Navbar = (props) => {
  let friendsElements = props.state.friends.map(friends => <Friends name={friends.name} id={friends.id} avatar={friends.avatar}/>);
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/friends" activeClassName={classes.activeLink}>Friends</NavLink>
      </div>
     <div>{friendsElements}</div>
    </nav>
  )
}
export default Navbar;