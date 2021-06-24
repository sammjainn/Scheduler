import Teachers from './Components/Teachers';
import Calendar from './Components/Calendar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Teachers}></Route>
            <Route
              path='/teacher/:teacherid'
              exact
              component={Calendar}
            ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
