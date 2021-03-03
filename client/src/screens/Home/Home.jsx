import './Home.css';
import PostCards from '../../components/PostCards/PostCards';
import Layout from '../../shared/Layout/Layout.jsx';

const Home = () => {
  return (
    <Layout>
      <div className='home'>
        <PostCards />
      </div>
    </Layout>
  )
}

export default Home