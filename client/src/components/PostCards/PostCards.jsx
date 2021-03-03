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

  const cards = posts.map((post, index) =>
    index < 8 ?
      <PostCard id={post.id} name={post.name} imgURL={post.imgURL} key={index} />
    : null)
  return (
    <div className='post-cards'>
      {cards}
    </div>
  )
}

export default PostCards