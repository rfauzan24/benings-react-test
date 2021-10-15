import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import Pay from './Pay';
import Details from './Details';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/pay">
              <Pay />
            </Route>
            <Route path="/items/:id">
              <Details />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
