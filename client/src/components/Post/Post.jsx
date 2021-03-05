import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom'

const Post = (props) => {
    return (
        <div className='post'>
          <Link className="post-link" to={`/posts/${props._id}`}>
            <img className="post-image" src={props.imgURL} alt={props.name} />
            <div className='post-text'>
              <div className="post-title">{props.title}</div>
              <div className="author">{`${props.author}`}</div>
            </div>
            </Link>
        </div>
    )
}

export default Post