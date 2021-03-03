import './App.css';
import Home from './screens/Home/Home';
import PostCreate from './screens/PostCreate/PostCreate';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/add-post' component={PostCreate} />
      </Switch>
    </div>
  );
}

export default App;
