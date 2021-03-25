import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
import CodeOfConductScreen from './screens/CodeOfConductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScheduleScreen from './screens/ScheduleScreen';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <Router basename='/react-conference'>
      <div>
        <Navbar />
        <Route path='/location' component={LocationScreen} />
        <Route path='/schedule' component={ScheduleScreen} />
        <Route path='/code' component={CodeOfConductScreen} />
        <Route exact path='/' component={HomeScreen} />
      </div>
    </Router>
  );
}

export default App;
