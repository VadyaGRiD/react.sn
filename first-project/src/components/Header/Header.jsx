import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <img src="https://englex.ru/app/uploads/learn-english-with-the-witcher.jpg"/>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/1889495/pub_5ef24f708d3a946a7b6377d8_5ef255fbb0fd6233b085f755/scale_1200"/>
    </header>;
}
export default Header;