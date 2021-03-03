import './App.css';
import Home from './screens/Home/Home';
import Posts from './screens/Posts/Posts'
import PostCreate from './screens/PostCreate/PostCreate';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path='/add-post' component={PostCreate} />
      </Switch>
    </div>
  );
}

export default App;
