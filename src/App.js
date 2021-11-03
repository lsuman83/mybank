import './App.css';
import Welcome from './Welcome';
import Checking from './Checking';
import Savings from './Savings';
import { BrowserRouter as Router,
          Switch,
          Route} from 'react-router-dom';
import Navbar from './Navbar';


function App() {
 return( 
  <div className="App">
    <Router>
      <Navbar />
      <Switch>
      <Route 
          exact
          path='/'
          component={Welcome}
          />
        <Route 
          exact
          path='/checking'
          component={Checking}
          />
        <Route
          exact
          path='/savings'
          component={Savings}
          />
      </Switch>
    </Router>
  </div>
 )
}

export default App;
