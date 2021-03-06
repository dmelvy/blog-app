import './PostCards.css';
import PostCard from '../PostCard/PostCard';
import { getPosts } from '../../services/posts';
import { useEffect, useState } from 'react';

function PostCards() {
  const [posts, setPosts] = useState(["I am a test"]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("i can has posts?");
      const posts = await getPosts();
      setPosts(posts)
    }
    fetchPosts();
  }, [])


  const cards = posts.reverse().map((post, index) =>
    index < 8 ?
      <PostCard id={post._id} title={post.title} imgURL={post.imgURL} key={index} />
    : null)
  return (
    <div className='latest'>Latest Posts:
      <div className='post-cards'>
      {cards}
      </div>
    </div>
  )
}

export default PostCards