import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://cs6.pikabu.ru/images/previews_comm/2015-07_2/1436179532133712006.jpg" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  )
}
export default Post;