import './PostCard.css';
import { Link } from 'react-router-dom';

function PostCard(props) {
  console.log(props)
  return (
    <div className='post-card'>
      <Link className='card' to={`/posts/${props.id}`}>
        <img className='post-card-image' src={props.imgURL} alt={props.title}/>
        <p className="card-title">{props.title}</p>
      </Link>
    </div>
  )
};

export default PostCard