import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/categories' component={Categories} />
          <Route path='/library' component={Library} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
