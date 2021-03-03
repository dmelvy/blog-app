import './PostCard.css';
import { Link } from 'react-router-dom';

function PostCard(props) {
  console.log(props)
  return (
    <div className='post-card'>
      <Link className='card' to={`/posts/${props.id}`}>
        <img className='post-card-image' src={props.imgURL} alt={props.title}/>
        <div>{props.title}</div>
      </Link>
    </div>
  )
};

export default PostCard