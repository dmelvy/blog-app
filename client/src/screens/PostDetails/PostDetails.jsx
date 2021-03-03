import { useState, useEffect } from 'react';
import './PostDetails.css';
import Layout from '../../shared/Layout/Layout';
import { useParams, Link } from 'react-router-dom';
import { getPost, deletePost } from '../../services/posts';

function PostDetails(props) {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPost(post)
      setLoaded(true)
    }
    fetchPost();
  }, [id])

  if (!isLoaded) {
    return <h2>Loading...</h2>
  }

  return (
    <Layout>
      <div className='post-detail'>
        <img className='post-detail-image' src={post.imgURL} alt={post.title} />
        <div className='detail-text'>
          <div className='post-detail-title'>{post.title}</div>
          <div className='post-detail-author'>{post.author}</div>
          <div className='post-detail-content'>{post.content}</div>
          <div className='button-container'>
            <button className='edit-button'>
              <Link className='edit-link' to={`/posts/${post._id}/edit`}>Edit</Link>
            </button>
            <button className='delete-button' onClick={() => deletePost(post._id)}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostDetails