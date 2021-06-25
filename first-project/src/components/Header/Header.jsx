import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => { 
    return <header className={classes.header}>
        <img src="https://englex.ru/app/uploads/learn-english-with-the-witcher.jpg"/>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/1889495/pub_5ef24f708d3a946a7b6377d8_5ef255fbb0fd6233b085f755/scale_1200"/>
        <div className={classes.loginBlock}>
            { props.isAuth ? props.login
            :<NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>;
}
export default Header;