import './Home.css';
import PostCards from '../../components/PostCards/PostCards';
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  <Layout>
    <div className='home'>
      <PostCards />
    </div>
  </Layout>
};

export default Home