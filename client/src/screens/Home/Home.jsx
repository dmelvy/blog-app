import './Home.css';
import PostCards from '../../components/PostCards/PostCards';
import Layout from '../../shared/Layout/Layout.jsx';


const Home = () => {
  return (
    <Layout>
      <div className='home'>
        <h2 className='blurb'>The place to share all your crud!</h2>
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home