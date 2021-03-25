import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
import CodeOfConductScreen from './screens/CodeOfConductScreen';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScheduleScreen from './screens/ScheduleScreen';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path='/location' component={LocationScreen} />
        <Route path='/schedule' component={ScheduleScreen} />
        <Route path='/code' component={CodeOfConductScreen} />
        <Route path='/' component={HomeScreen} exact />
      </div>
    </Router>
  );
}

export default App;
