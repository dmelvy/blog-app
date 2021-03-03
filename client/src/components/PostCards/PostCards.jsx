import './PostCards.css';
import PostCard from '../PostCard/PostCard';
import { getPosts } from '../../services/posts';
import { useEffect, useState } from 'react';

function PostCards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const resp = await getPosts();
    setPosts(resp.data)
  }, [])

  return (
    <div className='post-cards'>

    </div>
  )
}

export default PostCards