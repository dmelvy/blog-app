import Post from '../../components/Post/Post'
import Search from '../../components/Search/Search'
import Layout from '../../shared/Layout/Layout'
import { useState, useEffect } from 'react'
import './Posts.css'
import { getPosts } from '../../services/posts'



const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])
  // const [toggleFetch, setToggleFetch] = useState(false)
  

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])


  const handleSearch = event => {
    const newQueriedPosts = allPosts.filter(post => post.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedPosts(newQueriedPosts)
  }

  const handleSubmit = event => event.preventDefault()

  const postsJSX = queriedPosts.map((post, index) =>
  index < 20 ?
      <Post _id={post._id} title={post.title} imgURL={post.imgURL} content={post.content} author={post.author} key={index} /> 
      : null
  )

  return (
    <Layout>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="posts">
        {postsJSX}
      </div>
    </Layout>
  )
}


export default Posts