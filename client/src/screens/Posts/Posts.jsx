import Post from '../../components/Post/Post'
import Layout from '../../shared/Layout/Layout'
import { useState, useEffect } from 'react'
import './Posts.css'
import Search from '../../components/Search/Search'
import Layout from '../../components/shared/Layout/Layout'
import { getPosts } from '../../services/posts'
import Nav from '../../shared/Nav/Nav'

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([])
  const [queriedPosts, setQueriedPosts] = useState([])
  

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()
      setAllPosts(posts)
      setQueriedPosts(posts)
    }
    fetchPosts()
  }, [])


  const handleSearch = event => {
    const newQueriedPosts = allPosts.filter(post => post.name.toLowerCase().includes(event.target.value.toLowerCase()))
  }

  const handleSubmit = event => event.preventDefault()

  const postsJSX = queriedPosts.map((post, index) =>
    <Post _id={post._id} name={post.name} imgURL={post.imgURL} content={post.content} author={post.author} key={index} />
  )

  return (
    <Layout>
      <Nav />
      <Link to='/posts'>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      <div className="posts">
        {postsJSX}
      </div>
        </Link>
    </Layout>
  )
}


export default Posts