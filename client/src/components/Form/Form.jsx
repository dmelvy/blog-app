import { useState, useEffect } from "react";
import { getPost, updatePost, createPost } from '../../services/posts.js';

import './Form.css'


function Form(props) {
  console.log(props)
  const [post, setPost] = useState(
    {
      title: '',
      imgURL: '',
      content: '',
      author: ''
  }
  );

  useEffect(() => {
    if (props.id) {
      const fetchPost = async () => {
        const post = await getPost(props.id);
        setPost(post);
      }
      fetchPost();
    }
  }, [props.id]);
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.id) {
      const something = await updatePost(props.id, post);
      props.setHappened(something);
    } else {
      const something = await createPost(post);
      props.setHappened({ something });
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
    <input
        className="input-name"
        placeholder='Title'
        value={post.title}
        name='title'
        required
        autoFocus
        onChange={handleChange}
    />
        <input
            className="input-image-link"
            placeholder='Image Link'
            value={post.imgURL}
            name='imgURL'
            required
            onChange={handleChange}
        />
        <textarea
            className="textarea-content"
            rows={10}
            placeholder='Content'
            value={post.content}
            name='content'
            required
            onChange={handleChange}
        />
    <input
        className="author"
        placeholder='Author'
        value={post.author}
        name='author'
        required
        onChange={handleChange}
    />
      <button type='submit' className="submit-button">{props.id ? 'Change':'Create'}</button>
</form>
);
};

export default Form